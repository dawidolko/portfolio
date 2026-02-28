import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Frontend Developer from{" "}
              <b className="purple">Rzeszów, Poland</b> who loves transforming
              ideas into beautiful, functional websites and applications.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React, Vue.js, and PHP{" "}
                </b>
              </i>
              — and I enjoy working across both frontend and backend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> Web Applications, UI/UX Design, </b>
              </i>
              and creating aesthetically pleasing, user-friendly digital
              experiences with strong SEO optimization.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js</b>,{" "}
              <b className="purple">Vue.js</b>, and modern frameworks like{" "}
              <i>
                <b className="purple">Next.js</b> and{" "}
                <b className="purple">Laravel</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
