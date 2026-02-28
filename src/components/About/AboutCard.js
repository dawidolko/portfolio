import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Dawid Olko</span> from{" "}
            <span className="purple">Rzeszów, Poland</span>.
            <br />
            I'm a <span className="purple">Frontend Developer</span>{" "}
            specializing in{" "}
            <span className="purple">React, Vue.js, and TypeScript</span>.
            <br />I studied{" "}
            <span className="purple">Computer Science</span> at the{" "}
            <span className="purple">University of Rzeszów</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports and Mountain Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography and Content Creation
            </li>
          </ul>

          <p style={{ color: "rgb(110, 231, 183)" }}>
            "Always available for freelance work. Feel free to contact me!"{" "}
          </p>
          <footer className="blockquote-footer">Dawid Olko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
