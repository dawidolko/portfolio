import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import Particle from "../Particle";
import hello from "../../assets/Blog/hello.webp";
import helloSmall from "../../assets/Blog/hello-640.webp";
import childhood from "../../assets/Blog/childhood.webp";
import childhoodSmall from "../../assets/Blog/childhood-640.webp";
import love from "../../assets/Blog/love.webp";
import loveSmall from "../../assets/Blog/love-640.webp";
import sport from "../../assets/Blog/sport.webp";
import sportSmall from "../../assets/Blog/sport-640.webp";
import computerscience from "../../assets/Blog/computerscience.webp";
import computerscienceSmall from "../../assets/Blog/computerscience-640.webp";
import family from "../../assets/Blog/family.webp";
import familySmall from "../../assets/Blog/family-640.webp";
import graduation from "../../assets/Blog/graduation.webp";
import graduationSmall from "../../assets/Blog/graduation-640.webp";
import egypt from "../../assets/Blog/egypt.webp";
import egyptSmall from "../../assets/Blog/egypt-640.webp";
import mountains from "../../assets/Blog/mountains.webp";
import mountainsSmall from "../../assets/Blog/mountains-640.webp";

import blogBg from "../../assets/Backgrounds/backgroundBlog.webp";

function Blog() {
  return (
    <Container fluid className="project-section">
      <div
        aria-hidden="true"
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
          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={hello}
              imgSmall={helloSmall}
              priority
              title="Hello!"
              description="A personal introduction — who I am, my passion for programming, tech journey, teamwork experiences, and the path that led me here."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={childhood}
              imgSmall={childhoodSmall}
              title="Childhood"
              description="A time worth returning to — reflections on childhood interests, technology, drawing, storytelling, and the curiosity that shaped who I am."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={love}
              imgSmall={loveSmall}
              title="Love"
              description="Someone I care about — a deep personal reflection about love, relationships, trust, and the people who make our lives truly meaningful."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={sport}
              imgSmall={sportSmall}
              title="Sport"
              description="A healthy mind in a healthy body — the importance of sports, physical and mental health, mountain hiking, and outdoor team activities."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={computerscience}
              imgSmall={computerscienceSmall}
              title="Computer Science"
              description="Never-ending learning — my passion for computer science, technology innovation, creative problem-solving, and the journey of lifelong growth."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={family}
              imgSmall={familySmall}
              title="Family"
              description="Continuous support — the importance of family bonds, support systems, shared values, and the strength that keeps us grounded every day."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={graduation}
              imgSmall={graduationSmall}
              title="Graduation"
              description="A new chapter begins — my thesis defense, graduation accomplishment, and the exciting transition from academic life to professional career."
            />
          </Col>

          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={egypt}
              imgSmall={egyptSmall}
              title="Egypt"
              description="Journey to ancient wonders — travel to Egypt, the pyramids, the Nile, ancient history, culture, and unforgettable vacation experiences."
            />
          </Col>

          {/*
            The ninth card completes the grid: with `md={4}` a row fits three items, so
            with eight the last row ended in an empty gap.
          */}
          <Col xs={12} sm={6} lg={4} className="blog-card">
            <BlogCards
              imgPath={mountains}
              imgSmall={mountainsSmall}
              title="Mountains"
              description="Summer 2026 in the Polish mountains — a cruise on Lake Solina, a rainy funicular ride and Morskie Oko at dawn. Time away from the screen."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
