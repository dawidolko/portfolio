import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  matchRoutes,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageMeta from "./components/PageMeta";
/*
 * Bootstrap first so the project's own styles (including the focus rules in
 * style.css) cascade over the framework defaults rather than under them.
 * Bootstrap's `.btn:focus-visible { outline: 0 }` otherwise wins on source
 * order and collapses the focus ring.
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import "./components/Projects/ProjectUi.css";
import "./components/Projects/ProjectDetail.css";

/*
 * A page that is already loaded renders without Suspense. Hydration needs that:
 * the served HTML has no Suspense markers, and ReactDOM.hydrate gives up on the
 * whole subtree when it meets a boundary it cannot match, which would throw the
 * prerendered page away and repaint it.
 */
function page(load) {
  let Loaded = null;
  const preload = () =>
    load().then((module) => {
      Loaded = module.default;
      return module;
    });
  const Lazy = lazy(preload);
  function Page() {
    if (Loaded) return <Loaded />;
    return (
      <Suspense fallback={<div />}>
        <Lazy />
      </Suspense>
    );
  }
  Page.preload = preload;
  return Page;
}

const pages = [
  { path: "/", Page: page(() => import("./components/Home/Home")) },
  { path: "/project", Page: page(() => import("./components/Projects/Projects")) },
  { path: "/project/:slug", Page: page(() => import("./components/Projects/ProjectDetail")) },
  { path: "/about", Page: page(() => import("./components/About/About")) },
  { path: "/resume", Page: page(() => import("./components/Resume/ResumeNew")) },
  { path: "/blog", Page: page(() => import("./components/Blog/Blog")) },
  { path: "*", Page: page(() => import("./components/NotFound")) },
];

export function preloadPage(pathname) {
  return matchRoutes(pages, pathname)[0].route.Page.preload();
}

function App() {
  return (
    <Router>
      <div className="App" id="scroll">
        <a className="skip-link" href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main-content");
          if (!main) return;
          main.focus();
          main.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
          Skip to main content
        </a>
        <header className="site-header">
          <Navbar />
        </header>
        <ScrollToTop />
        <PageMeta />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            {pages.map(({ path, Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
