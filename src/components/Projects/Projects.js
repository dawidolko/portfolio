import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartrecommender from "../../assets/Projects/smartrecommender.svg";
import fitnessgym from "../../assets/Projects/fitnessgym.svg";
import techbyte from "../../assets/Projects/techbyte.svg";
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

import projectBg from "../../assets/Backgrounds/backgroundFaq2-photoaidcom-greyscale.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartrecommender}
              title="SmartRecommender"
              description="Recommendation system built with Django and React featuring intelligent content suggestions, user authentication, and a fully responsive interface."
              ghLink="https://github.com/dawidolko/SmartRecommender-Projekt-Django-React"
              demoLink="https://project.dawidolko.pl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessgym}
              title="FitnessGym"
              description="Modern fitness gym app built with React featuring workout plans, class schedules, membership management, and a responsive user interface."
              ghLink="https://github.com/dawidolko/FitnessGym-Project-React"
              demoLink="https://fitnessgym.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techbyte}
              title="TechByte"
              description="Computer store with full e-commerce functionality built with PHP, JavaScript and SASS. Includes product catalog, cart, and order management."
              ghLink="https://github.com/dawidolko/Database-Project-ComputerStore"
              demoLink="https://piotrsmola.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movievault}
              title="MovieVault"
              description="Movie management app built with Spring Boot and React. Features browsing, reviews, user ratings, and a modern responsive interface design."
              ghLink="https://github.com/dawidolko/MovieVault-Project-SpringBoot-React"
              youtubeLink="https://youtu.be/ooIoa_PGRzk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workstation}
              title="WorkStation"
              description="Workspace app built with Vue.js and TypeScript featuring task management, productivity tools, and a clean, modern user-friendly interface."
              ghLink="https://github.com/dawidolko/WorkStation-Vue-TypeScript"
              demoLink="https://workstation.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1zone}
              title="F1Zone"
              description="Formula 1 fan site built with HTML, CSS, JS, SASS. Features race schedules, driver profiles, team standings, and latest news updates."
              ghLink="https://github.com/dawidolko/F1Zone-Project-HTML-CSS-JS-SASS"
              demoLink="https://f1.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kebab}
              title="Kebab Project"
              description="Food ordering application built with React featuring menu browsing, order customization, cart management, and fully responsive design."
              ghLink="https://github.com/dawidolko/Kebab-Project-React"
              demoLink="https://kebab.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              title="Weather App"
              description="Weather app built with Laravel and React displaying real-time weather data, forecasts, and location-based weather information system."
              ghLink="https://github.com/dawidolko/Weather-App-Laravel-React"
              youtubeLink="https://www.youtube.com/watch?v=WTi2i2wHPt0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemareserve}
              title="CinemaReserve"
              description="Cinema reservation system built with Node.js and Angular with movie listings, seat selection, booking management and payment flow."
              ghLink="https://github.com/dawidolko/CinemaReserve-Project-Node-Angular"
              youtubeLink="https://youtu.be/7ygXIAm0sFc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtechblog}
              title="DevTechBlog"
              description="Developer blog platform built with React featuring article publishing, category filtering, syntax highlighting, and clean reading experience."
              ghLink="https://github.com/dawidolko/DevTechBlog-Platform-React"
              demoLink="https://devtechblog.dawidolko.pl/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplelayout}
              title="Simple Layout"
              description="Clean layout showcase built with Vue.js demonstrating modern CSS layouts, responsive design patterns, and Vue component architecture."
              ghLink="https://github.com/dawidolko/Layout-Simple-Vue"
              demoLink="https://simplelayout.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curiositiesmagazine}
              title="CuriositiesMagazine"
              description="Magazine-style website built with JS, HTML and SASS featuring article layouts, image galleries, and polished editorial design elements."
              ghLink="https://github.com/dawidolko/CuriositiesMagazine-Project-HTML-CSS"
              demoLink="https://projekt1.dawidolko.pl/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitrecruit}
              title="BitRecruit"
              description="Recruitment platform built with Next.js featuring job listings, candidate management, employer dashboards, and a modern responsive design."
              ghLink="https://github.com/dawidolko/BitRecruit-Platform-NextJS"
              demoLink="http://bitrecruit.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mpindustries}
              title="MP Industries"
              description="Fullstack business platform built with Laravel, Blade and Tailwind CSS. Features CNC machines catalog, LPG services, dog breeding and honey products with admin panel."
              demoLink="https://mp-industries.pl/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
