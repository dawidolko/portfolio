import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageMeta from "./components/PageMeta";
import Home from "./components/Home/Home";
/*
 * Bootstrap first so the project's own styles (including the focus rules in
 * style.css) cascade over the framework defaults rather than under them.
 * Bootstrap's `.btn:focus-visible { outline: 0 }` otherwise wins on source
 * order and collapses the focus ring.
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const ProjectDetail = lazy(() => import("./components/Projects/ProjectDetail"));
const NotFound = lazy(() => import("./components/NotFound"));

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
          <Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
