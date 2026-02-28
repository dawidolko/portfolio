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

function Blog() {
  return (
    <Container fluid className="project-section">
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
              description="A personal introduction — who I am, my passion for programming, and my journey through the world of technology and teamwork."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={childhood}
              title="Childhood"
              description="A time worth returning to... Reflections on childhood interests — technology, drawing, storytelling, and the curiosity that shaped who I am today."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={love}
              title="Love"
              description="Someone I care about... A deep personal reflection about love, relationships, and the people who make life meaningful."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={sport}
              title="Sport"
              description="A healthy mind in a healthy body. The importance of sports, physical and mental health, mountain hiking, and outdoor activities."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={computerscience}
              title="Computer Science"
              description="Never-ending learning... My passion for computer science, technology innovation, problem-solving, and the journey of lifelong learning."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={family}
              title="Family"
              description="Continuous support. The importance of family bonds, support systems, and the values that keep us grounded through life's journey."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={graduation}
              title="Graduation"
              description="A new chapter begins. My thesis defense, graduation accomplishment, and the exciting transition from academic to professional life."
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCards
              imgPath={egypt}
              title="Egypt"
              description="Journey to ancient wonders. Travel to Egypt — the pyramids, the Nile, ancient history, and unforgettable vacation experiences."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
