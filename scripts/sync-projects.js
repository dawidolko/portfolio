/*
 * Project text lives in one place, data/projects.json in the dawidolko.pl
 * repository. This copies it here and writes a lighter file with only what a
 * card and its tooltip need, so the home page does not carry every long
 * description. Run it by hand after the data changes and commit the result;
 * the CI build uses the committed files and needs no network.
 */
const fs = require("fs");
const path = require("path");

const sibling = path.join(__dirname, "..", "..", "dawidolko.pl", "data", "projects.json");
const remote = "https://dawidolko.pl/data/projects.json";
const dataDir = path.join(__dirname, "..", "src", "data");

async function load() {
  if (fs.existsSync(sibling)) return JSON.parse(fs.readFileSync(sibling, "utf8"));
  const response = await fetch(remote);
  if (!response.ok) throw new Error(`${remote} answered ${response.status}`);
  return response.json();
}

load().then((projects) => {
  const cards = projects.map(({ slug, title, start, end, kind, tagline, shows, repo, live, video, private: closed, credit, creditUrl }) => ({
    slug,
    title,
    start,
    end,
    kind,
    tagline,
    shows: shows.slice(0, 3),
    repo,
    live,
    video,
    private: closed,
    /*
     * Only a linked credit names an original project. A plain credit is a person
     * and stays in the full data, so it is not added to the home page cards.
     */
    ...(creditUrl ? { credit, creditUrl } : {}),
  }));
  fs.writeFileSync(path.join(dataDir, "projects.json"), `${JSON.stringify(projects, null, 2)}\n`);
  fs.writeFileSync(path.join(dataDir, "project-cards.json"), `${JSON.stringify(cards, null, 2)}\n`);
  console.log(`${projects.length} projects synced.`);
});
