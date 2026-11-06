/*
 * Screenshots live once, on dawidolko.pl. data/media.json there is written by
 * its generator from the files that exist, so new media shows up here without
 * a rebuild of this site.
 */
export const MEDIA_ORIGIN = "https://dawidolko.pl";

let manifest = null;

export function loadMedia() {
  if (!manifest) {
    manifest = fetch(`${MEDIA_ORIGIN}/data/media.json`)
      .then((response) => (response.ok ? response.json() : {}))
      .catch(() => {
        manifest = null;
        return {};
      });
  }
  return manifest;
}

export function dateRange(project) {
  if (!project.end || project.end === project.start) return project.start;
  return `${project.start} – ${project.end}`;
}

export function repoUrl(project) {
  return project.repo && !project.private ? `https://github.com/dawidolko/${project.repo}` : "";
}

export function youtube(url) {
  const match = /(?:youtu\.be\/|[?&]v=|\/shorts\/)([\w-]{11})/.exec(url || "");
  return match ? { id: match[1], portrait: url.includes("/shorts/") } : null;
}

export function describeShot(name) {
  if (name.startsWith("mobile")) return "phone view";
  if (name.startsWith("desktop")) return `desktop view ${name.replace(/\D/g, "")}`;
  return `screenshot ${name.replace(/\D/g, "")}`;
}
