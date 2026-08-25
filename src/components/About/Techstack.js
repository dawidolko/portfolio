import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiVuedotjs, SiLaravel, SiSass, SiBootstrap } from "react-icons/si";
import Javascript from "../../assets/TechIcons/Javascript.svg";
import Node from "../../assets/TechIcons/Node.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Python from "../../assets/TechIcons/Python.svg";
import Typescript from "../../assets/TechIcons/Typescript.svg";
import Git from "../../assets/TechIcons/Git.svg";
import SQL from "../../assets/TechIcons/SQL.svg";
import Tailwind from "../../assets/TechIcons/Tailwind.svg";
import C from "../../assets/TechIcons/C++.svg";
import Docker from "../../assets/TechIcons/Docker.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs aria-hidden="true" fontSize={"24px"} color="#4FC08D" />
        <div className="tech-icons-text">Vue.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs aria-hidden="true" fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel aria-hidden="true" fontSize={"24px"} color="#FF2D20" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">C/C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass aria-hidden="true" fontSize={"24px"} color="#CC6699" />
        <div className="tech-icons-text">SASS/SCSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap aria-hidden="true" fontSize={"24px"} color="#7952B3" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">SQL/MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="" loading="lazy" decoding="async" />
        <div className="tech-icons-text">Docker</div>
      </Col>
    </Row>
  );
}

export default Techstack;
