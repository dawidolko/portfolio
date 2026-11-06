import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "../data/routes.json";

const SITE = "https://olkodawid.dawidolko.pl";

function setMeta(name, content) {
  const tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) tag.setAttribute("content", content);
}

/*
 * Every address is served with correct head tags by scripts/static-routes.js.
 * This keeps them true after client-side navigation. Project pages stay out
 * of the index, so they carry noindex and no canonical at all: dawidolko.pl
 * is where those pages are indexed.
 */
function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const route = routes[path];
    const isProject = path.startsWith("/project/");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (route) {
      document.title = route.title;
      setMeta("description", route.description);
      setMeta("robots", "index, follow");
      const href = `${SITE}${path === "/" ? "/" : `${path}/`}`;
      if (canonical) {
        canonical.href = href;
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = href;
        document.head.appendChild(link);
      }
    } else {
      setMeta("robots", isProject ? "noindex, follow" : "noindex");
      if (canonical) canonical.remove();
    }
  }, [pathname]);

  return null;
}

export default PageMeta;
