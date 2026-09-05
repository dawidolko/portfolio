import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import morskieOko from "../../assets/morskie-oko-2026.webp";
import Toolstack from "./Toolstack";

import aboutBg from "../../assets/Backgrounds/backgroundHobbies2-photoaidcom-greyscale.webp";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <div
          aria-hidden="true"
          className="section-bg-overlay"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="Dawid Olko working at his desk"
                className="img-fluid"
                width="1000"
                height="689"
                loading="lazy"
                decoding="async"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(16,185,129,0.15)",
                }}
              />
            </Col>
          </Row>
          {/*
            Zdjecie spoza pracy. Strona jest poza tym w calosci o technologiach;
            podpis niesie miejsce i date, wiec obraz nie jest sama dekoracja.
          */}
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="about-img">
              <figure style={{ margin: 0 }}>
                <img
                  src={morskieOko}
                  alt="Dawid Olko standing on a boulder at the shore of Morskie Oko in the Tatra Mountains"
                  className="img-fluid"
                  width="675"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(16,185,129,0.15)",
                  }}
                />
                <figcaption
                  style={{
                    paddingTop: "10px",
                    textAlign: "center",
                    fontSize: "0.95em",
                    opacity: 0.85,
                  }}
                >
                  Morskie Oko, Tatra Mountains &mdash; 02.08.2026
                </figcaption>
              </figure>
            </Col>
          </Row>

          <h2 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h2>

          <Techstack />

          <h2 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h2>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
