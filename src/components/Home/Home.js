import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/about.webp";
import homeLogoSmall from "../../assets/about-700.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ProjectCard from "../Projects/ProjectCards";
import skribly from "../../assets/Projects/skribly.svg";
import smartrecommender from "../../assets/Projects/smartrecommender.svg";
import bitrecruit from "../../assets/Projects/bitrecruit.svg";
import workstation from "../../assets/Projects/workstation.svg";

import homeBg from "../../assets/Backgrounds/backgroundHome.webp";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div
          className="section-bg-overlay"
          style={{ backgroundImage: `url(${homeBg})` }}
        />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h2 className="heading-name">
                I'M
                <strong className="main-name"> DAWID OLKO</strong>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                srcSet={`${homeLogoSmall} 700w, ${homeLogo} 800w`}
                sizes="(max-width: 767px) calc(100vw - 24px), 42vw"
                alt="Dawid Olko working at his desk"
                className="img-fluid"
                width="1000"
                height="689"
                fetchpriority="high"
                style={{
                  maxHeight: "450px",
                  borderRadius: "20px",
                  boxShadow: "0 12px 40px rgba(16,185,129,0.2)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      {/* Featured Projects */}
      <Container fluid className="home-projects-section">
        <Container>
          <h2 className="project-heading" style={{ paddingBottom: "10px" }}>
            Featured <strong className="purple">Projects</strong>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
            A few highlights from my recent work.
          </p>
          <Row style={{ justifyContent: "center" }}>
            <Col md={3} className="project-card">
              <ProjectCard
                slug="skribly"
                imgPath={skribly}
                description="A set of three tools for building software with AI coding agents: a task tracker, a desktop app that runs the agents and a shared library of rules."
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                slug="bitrecruit"
                imgPath={bitrecruit}
                description="Recruitment platform built with Next.js featuring job listings, candidate management, employer dashboards, and a modern responsive design."
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                slug="smartrecommender"
                imgPath={smartrecommender}
                description="Recommendation system built with Django and React featuring intelligent content suggestions, user authentication, and a fully responsive interface."
              />
            </Col>
            <Col md={3} className="project-card">
              <ProjectCard
                slug="workstation"
                imgPath={workstation}
                description="Workspace app built with Vue.js and TypeScript featuring task management, productivity tools, and a clean, modern user-friendly interface."
              />
            </Col>
          </Row>
          <div
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "40px",
            }}>
            <Button
              as={Link}
              to="/project"
              variant="primary"
              style={{
                padding: "10px 28px",
                fontSize: "1.05em",
                borderRadius: "10px",
              }}>
              View All Projects &rarr;
            </Button>
          </div>
        </Container>
      </Container>

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h2>Find Me On</h2>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dawidolko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dawidolko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in a new tab)"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dawid_olko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)"
                  className="icon-colour home-social-icons">
                  <AiFillInstagram aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/olkodawid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (opens in a new tab)"
                  className="icon-colour home-social-icons">
                  <FaFacebookF aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube (opens in a new tab)"
                  className="icon-colour home-social-icons">
                  <AiFillYoutube aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok (opens in a new tab)"
                  className="icon-colour home-social-icons">
                  <FaTiktok aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
