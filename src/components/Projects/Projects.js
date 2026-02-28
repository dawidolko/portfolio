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
import widgetmart from "../../assets/Projects/widgetmart.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              description="A recommendation system built with Django and React. Full-stack application with intelligent content recommendations, user authentication, and responsive design."
              ghLink="https://github.com/dawidolko/SmartRecommender-Projekt-Django-React"
              demoLink="https://project.dawidolko.pl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessgym}
              title="FitnessGym"
              description="A modern fitness gym application built with React. Features workout plans, class schedules, membership management, and a responsive user interface."
              ghLink="https://github.com/dawidolko/FitnessGym-Project-React"
              demoLink="https://fitnessgym.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techbyte}
              title="TechByte"
              description="A computer store database project with full e-commerce functionality. Built with PHP, JavaScript and SASS, featuring product catalog, shopping cart, and order management."
              ghLink="https://github.com/dawidolko/Database-Project-ComputerStore"
              demoLink="https://piotrsmola.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movievault}
              title="MovieVault"
              description="A movie management application built with Spring Boot and React. Features movie browsing, reviews, user ratings, and a modern responsive interface."
              ghLink="https://github.com/dawidolko/MovieVault-Project-SpringBoot-React"
              youtubeLink="https://youtu.be/ooIoa_PGRzk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workstation}
              title="WorkStation"
              description="A workspace application built with Vue.js and TypeScript. Features task management, productivity tools, and a clean, modern interface."
              ghLink="https://github.com/dawidolko/WorkStation-Vue-TypeScript"
              demoLink="https://workstation.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1zone}
              title="F1Zone"
              description="A Formula 1 fan site built with HTML, CSS, JavaScript, and SASS. Features race schedules, driver profiles, team standings, and news updates."
              ghLink="https://github.com/dawidolko/F1Zone-Project-HTML-CSS-JS-SASS"
              demoLink="https://f1.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kebab}
              title="Kebab Project"
              description="A food ordering application built with React. Features menu browsing, order customization, cart management, and responsive design."
              ghLink="https://github.com/dawidolko/Kebab-Project-React"
              demoLink="https://kebab.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              title="Weather App"
              description="A weather application built with Laravel and React. Displays real-time weather data, forecasts, and location-based weather information."
              ghLink="https://github.com/dawidolko/Weather-App-Laravel-React"
              youtubeLink="https://www.youtube.com/watch?v=WTi2i2wHPt0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinemareserve}
              title="CinemaReserve"
              description="A cinema reservation system built with Node.js and Angular. Features movie listings, seat selection, booking management, and payment integration."
              ghLink="https://github.com/dawidolko/CinemaReserve-Project-Node-Angular"
              youtubeLink="https://youtu.be/7ygXIAm0sFc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtechblog}
              title="DevTechBlog"
              description="A developer blog platform built with React. Features article publishing, category filtering, syntax highlighting, and a clean reading experience."
              ghLink="https://github.com/dawidolko/DevTechBlog-Platform-React"
              demoLink="https://devtechblog.dawidolko.pl/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplelayout}
              title="Simple Layout"
              description="A clean layout showcase built with Vue.js. Demonstrates modern CSS layouts, responsive design patterns, and Vue component architecture."
              ghLink="https://github.com/dawidolko/Layout-Simple-Vue"
              demoLink="https://simplelayout.dawidolko.pl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curiositiesmagazine}
              title="CuriositiesMagazine"
              description="A magazine-style website built with JavaScript, HTML, and SASS. Features article layouts, image galleries, and a polished editorial design."
              demoLink="https://projekt1.dawidolko.pl/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
