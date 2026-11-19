import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

/*
 * The resume page shows the live CV from cv.dawidolko.pl, the only place the CV is kept, in a frame. That page is
 * responsive, so the CV reads well on a phone, and it has real text and links. In a frame it hides its own chrome and
 * posts its height ({type: "cv:height"}, see assets/embed.js there), which sizes the frame so the page scrolls as one.
 */
const CV = "https://cv.dawidolko.pl";
const pdf = `${CV}/Dawid_Olko_CV_EN.pdf`;

function ResumeNew() {
  const frame = useRef(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== CV || event.source !== frame.current?.contentWindow) return;
      const value = event.data?.type === "cv:height" ? Number(event.data.height) : NaN;
      if (Number.isFinite(value) && value > 200 && value < 20000) setHeight(value);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="visually-hidden-a11y">Resume — Dawid Olko</h1>
        <Row className="resume-actions">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV as PDF (opens in a new tab)"
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href={`${CV}/en/`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the CV at cv.dawidolko.pl (opens in a new tab)"
          >
            Open at cv.dawidolko.pl
          </Button>
        </Row>

        <Row className="resume">
          <iframe
            ref={frame}
            className="resume-frame"
            src={`${CV}/en/`}
            title="Resume of Dawid Olko"
            style={height ? { height: `${height}px` } : undefined}
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
