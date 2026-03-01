import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import Particle from "../Particle";
import hello from "../../assets/Blog/hello.webp";
import childhood from "../../assets/Blog/childhood.webp";
import love from "../../assets/Blog/love.webp";
import sport from "../../assets/Blog/sport.webp";
import computerscience from "../../assets/Blog/computerscience.webp";
import family from "../../assets/Blog/family.webp";
import graduation from "../../assets/Blog/graduation.webp";
import egypt from "../../assets/Blog/egypt.webp";

import blogBg from "../../assets/Backgrounds/backgroundContact2-photoaidcom-greyscale.png";

function Blog() {
  return (
    <Container fluid className="project-section">
      <div
        className="section-bg-overlay"
        style={{ backgroundImage: `url(${blogBg})` }}
      />
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Personal stories, thoughts, and experiences from my life.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={hello}
              title="Hello!"
              description="A personal introduction — who I am, my passion for programming, tech journey, teamwork experiences, and the path that led me here."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={childhood}
              title="Childhood"
              description="A time worth returning to — reflections on childhood interests, technology, drawing, storytelling, and the curiosity that shaped who I am."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={love}
              title="Love"
              description="Someone I care about — a deep personal reflection about love, relationships, trust, and the people who make our lives truly meaningful."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={sport}
              title="Sport"
              description="A healthy mind in a healthy body — the importance of sports, physical and mental health, mountain hiking, and outdoor team activities."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={computerscience}
              title="Computer Science"
              description="Never-ending learning — my passion for computer science, technology innovation, creative problem-solving, and the journey of lifelong growth."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={family}
              title="Family"
              description="Continuous support — the importance of family bonds, support systems, shared values, and the strength that keeps us grounded every day."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={graduation}
              title="Graduation"
              description="A new chapter begins — my thesis defense, graduation accomplishment, and the exciting transition from academic life to professional career."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={egypt}
              title="Egypt"
              description="Journey to ancient wonders — travel to Egypt, the pyramids, the Nile, ancient history, culture, and unforgettable vacation experiences."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
