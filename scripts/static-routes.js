/*
 * GitHub Pages serves files, not routes, so after the build this writes one
 * HTML file per address from a route table. Each file answers 200 with its own
 * title, description, canonical and a real h1, and React replaces the static
 * body when it mounts.
 *
 * Project pages get `noindex, follow` and no canonical, because they are
 * indexed on dawidolko.pl and must not show up as duplicates here. They are
 * also left out of sitemap.xml. build/404.html answers everything else with a
 * real 404 status.
 */
const fs = require("fs");
const path = require("path");
const routes = require("../src/data/routes.json");
const projects = require("../src/data/projects.json");

const SITE = "https://olkodawid.dawidolko.pl";
const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("No build/index.html — run the build first.");
  process.exit(1);
}

const shell = fs.readFileSync(indexPath, "utf8");

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const links = [
  ["/", "Home"],
  ["/project/", "Projects"],
  ["/about/", "About"],
  ["/resume/", "Resume"],
  ["/blog/", "Blog"],
];

function staticBody({ heading, text, extra = "" }) {
  const nav = links.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" ");
  return `<div id="root"><div class="static-page"><nav aria-label="Site">${nav}</nav><main><h1>${esc(heading)}</h1><p>${esc(text)}</p>${extra}</main></div></div>`;
}

function setContent(html, pattern, value) {
  return html.replace(pattern, (_, open, close) => `${open}${esc(value)}${close}`);
}

function renderPage({ title, description, url, robots, heading, text, extra, image }) {
  let html = shell;
  html = html.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`);
  for (const name of ['name="title"', 'property="og:title"', 'name="twitter:title"', 'itemprop="name"']) {
    html = setContent(html, new RegExp(`(<meta\\s+${name}\\s+content=")[^"]*(")`), title);
  }
  for (const name of ['name="description"', 'property="og:description"', 'name="twitter:description"', 'itemprop="description"']) {
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
    html = html.replace(/(<meta\s+(?:property="og:image(?::secure_url)?"|name="twitter:image"|itemprop="image")\s+content=")[^"]*(")/g, `$1${image}$2`);
    html = html.replace(/(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
    html = html.replace(/(<meta\s+name="twitter:image:alt"\s+content=")[^"]*(")/, `$1${esc(title)}$2`);
  }
  return html.replace('<div id="root"></div>', staticBody({ heading, text, extra }));
}

function write(route, html) {
  if (route.startsWith("project/") && (html.includes('rel="canonical"') || !html.includes('content="noindex, follow"'))) {
    throw new Error(`${route}: a project page must be noindex with no canonical`);
  }
  const dir = path.join(buildDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const projectList = `<ul>${projects.map((p) => `<li><a href="/project/${p.slug}/">${esc(p.title)}</a></li>`).join("")}</ul>`;

for (const [route, meta] of Object.entries(routes)) {
  const url = `${SITE}${route === "/" ? "/" : `${route}/`}`;
  write(route, renderPage({ ...meta, url, robots: "index, follow", extra: route === "/project" ? projectList : "" }));
}

for (const p of projects) {
  write(
    `project/${p.slug}`,
    renderPage({
      title: `${p.title}: ${p.kind} | Dawid Olko`,
      description: `${p.title}: ${p.tagline}.`,
      url: `${SITE}/project/${p.slug}/`,
      robots: "noindex, follow",
      heading: p.title,
      text: p.summary,
      image: `https://dawidolko.pl/src/assets/img/og/${p.slug}.jpg`,
    }),
  );
}

fs.writeFileSync(
  path.join(buildDir, "404.html"),
  renderPage({
    title: "Page not found | Dawid Olko",
    description: "This address does not exist on this site. Go back to the home page, or open the projects, about, resume or blog pages from the links above.",
    url: `${SITE}/`,
    robots: "noindex",
    heading: "Page not found",
    text: "This address does not exist on this site.",
  }),
);

fs.copyFileSync(require.resolve("pdfjs-dist/build/pdf.worker.min.js"), path.join(buildDir, "pdf.worker.min.js"));

const pages = Object.entries(routes)
  .map(([route, meta]) => `- [${meta.heading}](${SITE}${route === "/" ? "/" : `${route}/`}): ${meta.description}`)
  .join("\n");
const list = projects.map((p) => `- [${p.title}](https://dawidolko.pl/projects/${p.slug}/): ${p.kind}.`).join("\n");
fs.writeFileSync(
  path.join(buildDir, "llms.txt"),
  `# Dawid Olko\n\n> Portfolio of Dawid Olko, a Fullstack / AI Developer from Rzeszów, Poland: projects, resume, blog and background.\n\n## Pages\n\n${pages}\n\n## Projects\n\n${list}\n`,
);

console.log(`Static pages written for ${Object.keys(routes).length} routes and ${projects.length} projects, plus 404.html.`);
