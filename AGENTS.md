# AGENTS.md

Guide for agents working on the portfolio site. Add a section per area as conventions
emerge — do not pad sections with content that is not established yet.

## What this project is

A single-page React portfolio (Create React App, React Router, react-bootstrap)
deployed to GitHub Pages. It presents projects, a blog, a résumé viewer and an
about page.

Read [README.md](README.md) first — it documents the architecture and the
commands used day to day.

## Language

**UI copy and code comments are English.** Labels, buttons, validation messages,
page titles, empty states and error text are all English. User-supplied data is
rendered exactly as entered and never normalised.

## Comments

Comments explain **why**, not what. The code already says what it does.

- Use multi-line block comments for anything that needs explaining; avoid
  trailing one-line comments tacked onto the end of a statement.
- A comment that restates the code is deleted rather than reworded.
- Document the constraint, the trade-off or the failure mode that made the code
  look the way it does — that is the part a reader cannot recover from the code.

## Accessibility

Non-negotiable, and cheap if you keep to the existing components:

- Never remove the global `:focus-visible` outline.
- Decorative icons are `aria-hidden="true"`; a meaningful icon gets a
  visually-hidden text equivalent.
- One `<h1>` per page and no skipped heading levels.
- Every page has `<header>`, `<nav>`, `<main id="main-content">` and `<footer>`,
  with a skip link as the first focusable element.
- Every form control has an associated label; errors use `role="alert"`.
- Honour `prefers-reduced-motion`.

## Styling

`src/style.css` is loaded **after** Bootstrap so the project's own rules — the
focus ring in particular — win on source order. Do not move the Bootstrap import
below it: Bootstrap ships `.btn:focus-visible { outline: 0 }`, which collapses
the focus ring back into an invisible border.

## Prerendering

Every address is served as HTML rendered from the production bundle, and React
hydrates it. A component's first render must therefore give the same result in
the build and in the browser:

- Read `window`, the viewport or anything else from the browser in an effect,
  never during render.
- Portals and `Suspense` do not render on the server, so add them after mount.
- A class that only appears at run time must exist as a literal in the scripts,
  or `scripts/static-routes.js` trims its rules from the stylesheet.

## Before finishing

- [ ] `npm run build` succeeds.
- [ ] Keyboard focus is visible on every interactive element.
- [ ] One `<h1>` per route and no skipped heading levels.
- [ ] No secrets committed.
- [ ] Copy is English.
