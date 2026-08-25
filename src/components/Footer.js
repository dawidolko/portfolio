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
    <Container as="footer" fluid className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <Container>
        <Row className="footer-content">
          <Col lg={3} md={6} className="footer-section">
            <h2 className="footer-title">
              <span className="footer-title-icon" aria-hidden="true">
                {"</>"}
              </span> Dawid Olko
            </h2>
            <p className="footer-desc">
              Frontend Developer from Rzeszów, Poland. Building modern web
              experiences with React, Vue.js, and TypeScript.
            </p>
            <p className="footer-location">
              <FaMapMarkerAlt aria-hidden="true" /> Rzeszów, Poland
            </p>
          </Col>

          <Col lg={2} md={6} className="footer-section">
            <h2 className="footer-title">Navigate</h2>
            <nav aria-label="Footer">
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
            </nav>
          </Col>

          <Col lg={3} md={6} className="footer-section">
            <h2 className="footer-title">Tech Stack</h2>
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
            <h2 className="footer-title">Connect</h2>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/dawidolko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in a new tab)">
                  <AiFillGithub aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dawidolko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in a new tab)">
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dawid_olko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (opens in a new tab)">
                  <AiFillInstagram aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube (opens in a new tab)">
                  <AiFillYoutube aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/olkodawid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook (opens in a new tab)">
                  <FaFacebookF aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@dawid_olko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok (opens in a new tab)">
                  <FaTiktok aria-hidden="true" />
                </a>
              </li>
            </ul>
            <p className="footer-email">
              <AiOutlineMail
                aria-hidden="true"
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
              Made with <FaHeart className="footer-heart" aria-hidden="true" /> by Dawid Olko
              &copy; {year}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top">
          <AiOutlineArrowUp aria-hidden="true" />
        </button>
      )}
    </Container>
  );
}

export default Footer;
