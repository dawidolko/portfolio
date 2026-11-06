/*
 * GitHub Pages serves files, not routes, so after the build this writes one
 * HTML file per address from a route table. Each file answers 200 with its own
 * title, description and canonical, and with the real page rendered into it.
 *
 * The page comes from the production bundle itself: it runs in jsdom and hands
 * back renderToString output through window.prerender (see src/index.js), which
 * is what ReactDOM.hydrate then expects to find. The stylesheet is trimmed to
 * the classes the site can use and inlined, so nothing blocks the first paint
 * and the largest image is there before any script has run.
 *
 * Project pages get `noindex, follow` and no canonical, because they are
 * indexed on dawidolko.pl and must not show up as duplicates here. They are
 * also left out of sitemap.xml. build/404.html answers everything else with a
 * real 404 status.
 */
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");
const postcss = require("postcss");
const routes = require("../src/data/routes.json");
const projects = require("../src/data/projects.json");

const SITE = "https://olkodawid.dawidolko.pl";
const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const indexPath = path.join(buildDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("No build/index.html — run the build first.");
  process.exit(1);
}

const cvHash = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "src/assets/Dawid_Olko_CV.pdf"))).digest("hex");
if (cvHash !== fs.readFileSync(path.join(root, "src/assets/Resume/source.sha256"), "utf8").trim()) {
  console.error("The resume preview is older than the PDF — run npm run resume:preview.");
  process.exit(1);
}

const shell = fs.readFileSync(indexPath, "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(buildDir, "asset-manifest.json"), "utf8"));

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/*
 * Serves the build to jsdom. Only the app's own scripts run: the accessibility
 * panel would add itself to the page.
 */
class BuildLoader extends ResourceLoader {
  constructor(chunks) {
    super();
    this.chunks = chunks;
  }

  fetch(url) {
    const { pathname } = new URL(url);
    if (!pathname.startsWith("/static/js/")) return Promise.resolve(Buffer.from(""));
    if (!/\/(main|prerender)\./.test(pathname)) this.chunks.push(pathname);
    return fs.promises.readFile(path.join(buildDir, pathname));
  }
}

function prerender(pathname) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const virtualConsole = new VirtualConsole();
    virtualConsole.on("error", (...args) => reject(new Error(`${pathname}: ${args.join(" ")}`)));
    virtualConsole.on("jsdomError", (error) => reject(new Error(`${pathname}: ${error.detail || error.message}`)));
    const dom = new JSDOM(shell, {
      url: `${SITE}${pathname}`,
      runScripts: "dangerously",
      resources: new BuildLoader(chunks),
      virtualConsole,
      beforeParse(window) {
        window.prerender = (body) => {
          resolve({ body, chunks });
          setTimeout(() => dom.window.close());
        };
      },
    });
  });
}

/*
 * Drops every rule that needs a class or data attribute which appears in
 * neither the rendered pages nor the scripts those pages run, so classes added
 * at run time (a collapsing navbar, the tooltip) keep their rules. Custom
 * properties nothing reads go too, which is most of Bootstrap's :root block.
 * Anything unsure is kept: a rule only goes when something it requires is
 * nowhere to be found.
 */
function trimCss(css, sources) {
  const known = new Set(sources.join(" ").match(/[\w-]+/g));
  const required = (selector) =>
    (selector.replace(/:not\([^)]*\)/g, "").match(/\.-?[_a-zA-Z][\w-]*|\[data-[\w-]+/g) || []).map((name) => name.replace(/^[.[]/, ""));
  const tree = postcss.parse(css);
  tree.walkRules((rule) => {
    if (/keyframes$/.test(rule.parent.name || "")) return;
    const kept = rule.selectors.filter((selector) => required(selector).every((name) => known.has(name)));
    if (kept.length === 0) rule.remove();
    else if (kept.length < rule.selectors.length) rule.selector = kept.join(",");
  });
  for (let removed = true; removed; ) {
    removed = false;
    const read = new Set(tree.toString().match(/var\(--[\w-]+/g));
    tree.walkDecls(/^--bs-/, (decl) => {
      if (read.has(`var(${decl.prop}`) || known.has(decl.prop)) return;
      decl.remove();
      removed = true;
    });
  }
  tree.walkRules((rule) => {
    if (rule.nodes.length === 0) rule.remove();
  });
  tree.walkAtRules(/^(media|supports|container)$/, (rule) => {
    if (rule.nodes.length === 0) rule.remove();
  });
  tree.walkAtRules("charset", (rule) => rule.remove());
  tree.walkComments((comment) => {
    if (comment.text.startsWith("# sourceMappingURL")) comment.remove();
  });
  return tree.toString();
}

/*
 * Some react-icons carry a `t` attribute left by the tool that exported them,
 * which is not valid on an svg. React does not restore it when hydrating.
 */
function cleanMarkup(body) {
  return body.replace(/(<svg\b[^>]*?) t="\d+"/g, "$1");
}

function setContent(html, pattern, value) {
  return html.replace(pattern, (_, open, close) => `${open}${esc(value)}${close}`);
}

function imagePreload(body) {
  const [img] = body.match(/<img[^>]*fetchpriority="high"[^>]*>/) || [];
  if (!img) return "";
  const attr = (name) => (img.match(new RegExp(` ${name}="([^"]*)"`, "i")) || [])[1];
  const set = attr("srcset") ? ` imagesrcset="${attr("srcset")}" imagesizes="${attr("sizes")}"` : "";
  return `<link rel="preload" as="image" href="${attr("src")}"${set} fetchpriority="high"/>`;
}

function renderPage({ title, description, url, robots, image, pathname, body, chunks }, css) {
  let html = shell;
  html = html.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`);
  for (const name of ['name="title"', 'property="og:title"', 'name="twitter:title"']) {
    html = setContent(html, new RegExp(`(<meta\\s+${name}\\s+content=")[^"]*(")`), title);
  }
  for (const name of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
    html = setContent(html, new RegExp(`(<meta\\s+${name}\\s+content=")[^"]*(")`), description);
  }
  for (const name of ['property="og:url"', 'name="twitter:url"']) {
    html = setContent(html, new RegExp(`(<meta\\s+${name}\\s+content=")[^"]*(")`), url);
  }
  html = html.replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, `$1${robots}$2`);
  html = robots === "index, follow"
    ? html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
    : html.replace(/<link\s+rel="canonical"[^>]*>/, "");
  if (image) {
    html = html.replace(/(<meta\s+(?:property="og:image(?::secure_url)?"|name="twitter:image")\s+content=")[^"]*(")/g, `$1${image}$2`);
    html = html.replace(/(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
    html = html.replace(/(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
  }
  const preloads = imagePreload(body) + chunks.map((src) => `<link rel="preload" as="script" href="${src}"/>`).join("");
  return html
    .replace(/<link[^>]*href="\/fonts\/fonts\.css"[^>]*>/, () => "")
    .replace(/<link[^>]*href="\/static\/css\/main\.[^>]*>/, () => `<style>${css}</style>`)
    .replace(/<link rel="preload" as="font"/, (font) => `${preloads}${font}`)
    .replace('<div id="root"></div>', () => `<div id="root" data-route="${pathname}">${body}</div>`);
}

function write(route, html) {
  if (route.startsWith("project/") && (html.includes('rel="canonical"') || !html.includes('content="noindex, follow"'))) {
    throw new Error(`${route}: a project page must be noindex with no canonical`);
  }
  const dir = path.join(buildDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const pages = [
  ...Object.entries(routes).map(([route, meta]) => {
    const pathname = route === "/" ? "/" : `${route}/`;
    return { ...meta, route, pathname, url: `${SITE}${pathname}`, robots: "index, follow" };
  }),
  ...projects.map((p) => ({
    title: `${p.title}: ${p.kind} | Dawid Olko`,
    description: `${p.title}: ${p.tagline}.`,
    route: `project/${p.slug}`,
    pathname: `/project/${p.slug}/`,
    url: `${SITE}/project/${p.slug}/`,
    robots: "noindex, follow",
    image: `https://dawidolko.pl/src/assets/img/og/${p.slug}.jpg`,
  })),
  {
    title: "Page not found | Dawid Olko",
    description: "This address does not exist on this site. Go back to the home page, or open the projects, about, resume or blog pages from the links above.",
    route: "404",
    pathname: "/404/",
    url: `${SITE}/`,
    robots: "noindex",
  },
];

async function main() {
  for (const page of pages) {
    const { body, chunks } = await prerender(page.pathname);
    Object.assign(page, { body: cleanMarkup(body), chunks });
  }

  const scripts = [...new Set([manifest.files["main.js"], ...pages.flatMap((page) => page.chunks)])]
    .map((file) => fs.readFileSync(path.join(buildDir, file), "utf8"));
  const panel = fs.readFileSync(path.join(buildDir, "a11y/a11y-panel.js"), "utf8");
  const sheet = fs.readFileSync(path.join(buildDir, manifest.files["main.css"]), "utf8");
  const fonts = fs.readFileSync(path.join(buildDir, "fonts/fonts.css"), "utf8").replace(/\/\*[\s\S]*?\*\//, "").trim();
  const css = fonts + trimCss(sheet, [...pages.map((page) => page.body), ...scripts, panel]);
  console.log(`Inlined stylesheet: ${sheet.length} bytes trimmed to ${css.length}.`);

  for (const page of pages) {
    const html = renderPage(page, css);
    if (page.route === "404") fs.writeFileSync(path.join(buildDir, "404.html"), html);
    else write(page.route, html);
  }

  fs.copyFileSync(require.resolve("pdfjs-dist/build/pdf.worker.min.js"), path.join(buildDir, "pdf.worker.min.js"));

  const routeList = Object.entries(routes)
    .map(([route, meta]) => `- [${meta.heading}](${SITE}${route === "/" ? "/" : `${route}/`}): ${meta.description}`)
    .join("\n");
  const list = projects.map((p) => `- [${p.title}](https://dawidolko.pl/projects/${p.slug}/): ${p.kind}.`).join("\n");
  fs.writeFileSync(
    path.join(buildDir, "llms.txt"),
    `# Dawid Olko\n\n> Portfolio of Dawid Olko, a Fullstack / AI Developer from Rzeszów, Poland: projects, resume, blog and background.\n\n## Pages\n\n${routeList}\n\n## Projects\n\n${list}\n`,
  );

  console.log(`Static pages written for ${Object.keys(routes).length} routes and ${projects.length} projects, plus 404.html.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
