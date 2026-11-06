import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { preloadPage } from "./App";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
 * Each address is served as prerendered HTML (scripts/static-routes.js), so the
 * page is loaded first and hydrated as one step, without an empty frame. The
 * build runs this same bundle to produce that HTML, through window.prerender.
 * 404.html answers any address, so it is only hydrated for the route it was
 * rendered for and otherwise replaced.
 */
preloadPage(window.location.pathname).then(async () => {
  if (window.prerender) {
    const { renderToString } = await import(/* webpackChunkName: "prerender" */ "react-dom/server");
    window.prerender(renderToString(app));
  } else if (root.dataset.route === window.location.pathname) {
    ReactDOM.hydrate(app, root);
  } else {
    ReactDOM.render(app, root);
  }
});
