import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./Toolstack";

import aboutBg from "../../assets/Backgrounds/backgroundHobbies2-photoaidcom-greyscale.webp";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <div
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
              }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img">
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(16,185,129,0.15)",
                }}
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
