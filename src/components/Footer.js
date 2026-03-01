import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container fluid className="footer">
      <div className="footer-glow" />
      <Container>
        <Row className="footer-content">
          <Col lg={3} md={6} className="footer-section">
            <h4 className="footer-title">
              <span className="footer-title-icon">{"</>"}</span> Dawid Olko
            </h4>
            <p className="footer-desc">
              Frontend Developer from Rzeszów, Poland. Building modern web
              experiences with React, Vue.js, and TypeScript.
            </p>
            <p className="footer-location">
              <FaMapMarkerAlt /> Rzeszów, Poland
            </p>
          </Col>

          <Col lg={2} md={6} className="footer-section">
            <h4 className="footer-title">Navigate</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/project">Projects</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="footer-section">
            <h4 className="footer-title">Tech Stack</h4>
            <div className="footer-tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vue.js</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">PHP</span>
              <span className="tech-badge">Laravel</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </Col>

          <Col lg={4} md={6} className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/dawidolko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dawidolko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dawid_olko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube">
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/olkodawid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok">
                  <FaTiktok />
                </a>
              </li>
            </ul>
            <p className="footer-email">
              <AiOutlineMail
                style={{ marginRight: "8px", fontSize: "1.1em" }}
              />
              <a href="mailto:dawid_olko@outlook.com">dawid_olko@outlook.com</a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="footer-bottom">
            <div className="footer-divider" />
            <p>
              Made with <FaHeart className="footer-heart" /> by Dawid Olko
              &copy; {year}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top">
          <AiOutlineArrowUp />
        </button>
      )}
    </Container>
  );
}

export default Footer;
