/**
 * GitHub Pages serves files, not routes. The site uses BrowserRouter, so
 * /about existed only once React had loaded — a direct hit, a shared link
 * or a crawler got GitHub's own 404 page instead of the page.
 *
 * After the build this script writes build/<route>/index.html for every
 * route, so each address answers 200 with the application shell and the
 * router takes over. build/404.html catches anything else and the catch-all
 * route sends it home.
 */
const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const routes = ["project", "about", "resume", "blog"];

const indexPath = path.join(buildDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("No build/index.html — run the build first.");
  process.exit(1);
}

const shell = fs.readFileSync(indexPath);

for (const route of routes) {
  const dir = path.join(buildDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), shell);
}

fs.writeFileSync(path.join(buildDir, "404.html"), shell);

console.log(`Static entries written for ${routes.length} routes plus 404.html.`);
