import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cards from "../../data/project-cards.json";
import frontendskills from "../../assets/Projects/frontend-skills.svg";
import skribly from "../../assets/Projects/skribly.svg";
import smartrecommender from "../../assets/Projects/smartrecommender.svg";
import fitnessgym from "../../assets/Projects/fitnessgym.svg";
import techbyte from "../../assets/Projects/techbyte.svg";
import ezscout from "../../assets/Projects/ezscout.svg";
import ezpace from "../../assets/Projects/ezpace.svg";
import cvforge from "../../assets/Projects/cvforge.svg";
import reelcut from "../../assets/Projects/reelcut.svg";
import workstation from "../../assets/Projects/workstation.svg";
import movievault from "../../assets/Projects/movievault.svg";
import f1zone from "../../assets/Projects/f1zone.svg";
import kebab from "../../assets/Projects/kebab.svg";
import devtechblog from "../../assets/Projects/devtechblog.svg";
import cinemareserve from "../../assets/Projects/cinemareserve.svg";
import weatherapp from "../../assets/Projects/weatherapp.svg";
import simplelayout from "../../assets/Projects/simplelayout.svg";
import curiositiesmagazine from "../../assets/Projects/curiositiesmagazine.svg";
import bitrecruit from "../../assets/Projects/bitrecruit.svg";
import mpindustries from "../../assets/Projects/logo30.svg";
import zbudujkompa from "../../assets/Projects/zbudujkompa.svg";
import bodykit from "../../assets/Projects/bodykit.svg";
import neobank from "../../assets/Projects/neobank.svg";
import framevision from "../../assets/Projects/framevision.svg";

import projectBg from "../../assets/Backgrounds/backgroundProjects.webp";

const featured = [
  {
    slug: "frontend-skills",
    imgPath: frontendskills,
    description:
      "Free, open-source front-end skills for 17 AI coding agents. One command learns the project's stack and installs what fits; the audit checks 275 sourced rules and gives the line and the fix. Node.js, no dependencies.",
  },
  {
    slug: "skribly",
    imgPath: skribly,
    description:
      "A private, non-commercial project of five developers: a desktop app for AI coding agents, a task tracker and 38 shared skills. Node.js, TypeScript, Electron.",
  },
  {
    slug: "smartrecommender",
    imgPath: smartrecommender,
    description:
      "Recommendation system built with Django and React featuring intelligent content suggestions, user authentication, and a fully responsive interface.",
  },
  {
    slug: "mp-industries",
    imgPath: mpindustries,
    description:
      "Fullstack business platform built with Laravel, Blade and Tailwind CSS. Features CNC machines catalog, LPG installations, dog breeding and honey products with admin panel.",
  },
  {
    slug: "neobank",
    imgPath: neobank,
    description:
      "Fullstack banking platform built with Nuxt, TypeScript, Prisma and PostgreSQL. Features accounts, transfers, transaction history, authentication and an admin panel.",
  },
  {
    slug: "techbyte",
    imgPath: techbyte,
    description:
      "Computer store with full e-commerce functionality built with PHP, JavaScript and SASS. Includes product catalog, cart, and order management.",
  },
  {
    slug: "movievault",
    imgPath: movievault,
    description:
      "Movie management app built with Spring Boot and React. Features browsing, reviews, user ratings, and a modern responsive interface design.",
  },
  {
    slug: "cinemareserve",
    imgPath: cinemareserve,
    description:
      "Cinema reservation system built with Node.js and Angular with movie listings, seat selection, booking management and payment flow.",
  },
  {
    slug: "zbudujkompa",
    imgPath: zbudujkompa,
    description:
      "Bilingual PC building guide built with Next.js and Tailwind CSS. Covers CPU platforms, cooling classes, reference builds and step-by-step assembly, with a compatibility checker and PSU calculator.",
  },
  {
    slug: "ezscout",
    imgPath: ezscout,
    description:
      "Scouting reports and match analysis for football clubs and agents, built with Next.js, TypeScript and Tailwind. Four packages, a sample report card in the hero and a CSS-only FAQ.",
  },
  {
    slug: "cvforge",
    imgPath: cvforge,
    description:
      "CV builder that runs entirely in the browser: fill in the form, pick one of three templates and print an A4 sheet identical to the preview. Data stays on the device; JSON export carries it between computers. Next.js, TypeScript, Tailwind.",
  },
  {
    slug: "reelcut",
    imgPath: reelcut,
    description:
      "Browser video editor: split the timeline, switch off what you do not need, correct picture and sound, then render a WebM through canvas and MediaRecorder. Nothing is uploaded. Next.js, TypeScript, Tailwind.",
  },
  {
    slug: "ezpace",
    imgPath: ezpace,
    description:
      "Running coaching site with a working pace calculator: pick a distance and a target time, get pace, speed and a split table that accounts for the leftover distance. Next.js, TypeScript, Tailwind.",
  },
  {
    slug: "weather-app",
    imgPath: weatherapp,
    description:
      "Weather app built with Laravel and React displaying real-time weather data, forecasts, and location-based weather information system.",
  },
  {
    slug: "bodykit",
    imgPath: bodykit,
    description:
      "Car tuning and body kit storefront built with Next.js, TypeScript and Tailwind CSS. Features a product catalog, filtering, cart and a fully responsive static export.",
  },
  {
    slug: "bitrecruit",
    imgPath: bitrecruit,
    description:
      "Recruitment platform built with Next.js featuring job listings, candidate management, employer dashboards, and a modern responsive design.",
  },
  {
    slug: "workstation",
    imgPath: workstation,
    description:
      "Workspace app built with Vue.js and TypeScript featuring task management, productivity tools, and a clean, modern user-friendly interface.",
  },
  {
    slug: "devpulse",
    imgPath: devtechblog,
    description:
      "Developer blog platform built with React featuring article publishing, category filtering, syntax highlighting, and clean reading experience.",
  },
  {
    slug: "fitnessgym",
    imgPath: fitnessgym,
    description:
      "Modern fitness gym app built with React featuring workout plans, class schedules, membership management, and a responsive user interface.",
  },
  {
    slug: "kebab",
    imgPath: kebab,
    description:
      "Food ordering application built with React featuring menu browsing, order customization, cart management, and fully responsive design.",
  },
  {
    slug: "f1-zone",
    imgPath: f1zone,
    description:
      "Formula 1 fan site built with HTML, CSS, JS, SASS. Features race schedules, driver profiles, team standings, and latest news updates.",
  },
  {
    slug: "curiosities-magazine",
    imgPath: curiositiesmagazine,
    description:
      "Magazine-style website built with JS, HTML and SASS featuring article layouts, image galleries, and polished editorial design elements.",
  },
  {
    slug: "layout-simple",
    imgPath: simplelayout,
    description:
      "Clean layout showcase built with Vue.js demonstrating modern CSS layouts, responsive design patterns, and Vue component architecture.",
  },
  {
    slug: "framevision",
    imgPath: framevision,
    description:
      "Front-end site for a professional photography studio, covering portrait, business, family and fine art sessions. Built with HTML, SASS and JavaScript with a fully responsive layout.",
  },
];

const featuredSlugs = new Set(featured.map((item) => item.slug));
const others = cards.filter((item) => !featuredSlugs.has(item.slug));

function Projects() {
  return (
    <Container fluid className="project-section">
      <div
        aria-hidden="true"
        className="section-bg-overlay"
        style={{ backgroundImage: `url(${projectBg})` }}
      />
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {featured.map((item, index) => (
            <Col xs={12} sm={6} lg={4} className="project-card" key={item.slug}>
              <ProjectCard {...item} eager={index < 3} priority={index === 0} />
            </Col>
          ))}
        </Row>
        <h2 className="project-heading">
          More <strong className="purple">Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {others.map((item) => (
            <Col xs={12} sm={6} lg={4} className="project-card project-card--compact" key={item.slug}>
              <ProjectCard slug={item.slug} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
