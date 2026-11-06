<p align="center">
  <a href="https://olkodawid.dawidolko.pl/"><img src="docs/readme/banner.webp" alt="dawidolko.pl — Portfolio: personal site. Personal portfolio website of Dawid Olko" width="100%"></a>
</p>

# dawidolko.pl — Portfolio

> Personal portfolio website of **Dawid Olko** — Fullstack / AI Developer from Rzeszów, Poland.  
> Built with **React.js**, featuring a modern dark theme with emerald accents.

![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-6-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG%202.1-AA-16A34A?logo=accessibleicon&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**[Live site](https://olkodawid.dawidolko.pl/)** · [Screenshots](#️-screenshots) · [Getting started](#-getting-started)

---

## 🎯 Key Features

- **Modern UI** — Dark theme with glassmorphism navbar, smooth animations, and emerald accent colors
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Project Showcase** — Card grid with hover overlays, an info tooltip on every card and a detail page per project
- **Personal Blog** — Photo blog with lightbox viewer (fullscreen with close button)
- **Resume/CV** — Built-in PDF viewer with download option
- **About Section** — Professional skillset badges, toolstack, and GitHub activity calendar
- **SEO Optimized** — JSON-LD structured data, Open Graph tags, Google Search Console integration
- **Performance** — Lazy loading, code splitting, optimized images, preconnect hints
- **Particle Background** — Interactive particle animation across all pages
- **Section Backgrounds** — Subtle greyscale photography backgrounds on each page
- **Back to Top** — Floating scroll-to-top button
- **Custom Font** — Plus Jakarta Sans for a polished, modern look

---

## 🖼️ Screenshots

| Home — animated intro | About — skills & GitHub activity |
|---|---|
| [<img src="docs/screenshots/home.webp" alt="Portfolio home page with typewriter intro and particle background"/>](docs/screenshots/home.webp) | [<img src="docs/screenshots/about.webp" alt="About page showing skillset badges, toolstack and GitHub contribution calendar"/>](docs/screenshots/about.webp) |

| Projects — card grid | Blog — photo journal |
|---|---|
| [<img src="docs/screenshots/projects.webp" alt="Projects page with card grid and hover overlays linking to GitHub and live demos"/>](docs/screenshots/projects.webp) | [<img src="docs/screenshots/blog.webp" alt="Blog page with photo cards opening in a fullscreen lightbox"/>](docs/screenshots/blog.webp) |

| Resume — built-in PDF viewer |
|---|
| [<img src="docs/screenshots/resume.webp" alt="Resume page rendering the CV in an embedded PDF viewer with a download button" width="49%"/>](docs/screenshots/resume.webp) |

---

## 🛠️ Technology Stack

| Category       | Technologies                                        |
| -------------- | --------------------------------------------------- |
| **Framework**  | React.js 17                                         |
| **Styling**    | React Bootstrap 5, Custom CSS                       |
| **Routing**    | React Router v6                                     |
| **Animations** | TSParticles, React Parallax Tilt, TypeWriter Effect |
| **Data**       | React GitHub Calendar, Axios                        |
| **PDF**        | React PDF                                           |
| **Icons**      | React Icons                                         |
| **Font**       | Plus Jakarta Sans, JetBrains Mono                   |
| **Deployment** | GitHub Pages via GitHub Actions                     |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/dawidolko/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/            # Images, SVGs, backgrounds, tech icons
├── components/
│   ├── About/         # About page, skills, tools, GitHub calendar
│   ├── Blog/          # Blog cards with lightbox and hover overlay
│   ├── Home/          # Landing page, intro, social links
│   ├── Projects/      # Project cards, tooltip and detail page
│   ├── Resume/        # PDF resume viewer
│   ├── Navbar.js      # Glassmorphism navigation bar
│   ├── Footer.js      # Multi-column footer with tech badges
│   ├── Particle.js    # TSParticles background
│   ├── Pre.js         # CSS preloader spinner
│   └── ScrollToTop.js # Scroll restoration
├── data/              # Route table and project data synced from dawidolko.pl
├── style.css          # Main stylesheet
├── index.css          # Font imports & base styles
└── App.js             # Router & layout
```

---

## 🚢 Deployment

Automatically deployed to **GitHub Pages** via GitHub Actions on push to `main`.

**Important:** In your GitHub repository settings, set Pages source to **GitHub Actions** (not "Deploy from a branch"). This ensures `index.html` is served instead of `README.md`.

---

## 🔍 SEO

- Google Search Console verified via HTML file and meta tags
- JSON-LD structured data for Person and WebSite schemas
- Open Graph and Twitter Card meta tags
- Canonical URL configured
- `robots.txt`, `sitemap.xml` and `llms.txt` included
- `scripts/static-routes.js` writes real HTML per route after the build; project detail pages are `noindex, follow` because they are indexed on dawidolko.pl
- Project text comes from `npm run projects:sync`; screenshots load from dawidolko.pl, listed in its `data/media.json`

---

## ♿ Accessibility

An accessibility panel in the corner of every page changes text size, contrast, font and motion, and remembers the choice on the device. It sits on top of the markup and does not replace accessible markup.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Dawid Olko** · Fullstack / AI Developer

[Portfolio](https://olkodawid.dawidolko.pl) · [CV](https://cv.dawidolko.pl) · [LinkedIn](https://www.linkedin.com/in/dawidolko/) · [GitHub](https://github.com/dawidolko)
