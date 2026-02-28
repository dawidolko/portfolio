import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaTiktok, FaFacebookF } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h4 className="footer-title">Dawid Olko</h4>
            <p className="footer-desc">
              Frontend Developer from Rzeszów, Poland. Building modern web
              experiences with React, Vue.js, and TypeScript.
            </p>
          </Col>

          <Col md={4} className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/project">Projects</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </Col>

          <Col md={4} className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <ul className="footer-icons">
              <li className="social-icons">
                <a href="https://github.com/dawidolko" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/dawidolko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/dawid_olko/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.youtube.com/@dawid_olko" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.facebook.com/olkodawid/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.tiktok.com/@dawid_olko" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok />
                </a>
              </li>
            </ul>
            <p className="footer-email">
              <AiOutlineMail style={{ marginRight: "6px" }} />
              dawid_olko@outlook.com
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="footer-bottom">
            <p>Copyright &copy; {year} Dawid Olko. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
