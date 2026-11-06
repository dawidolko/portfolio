import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/Dawid_Olko_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

/*
 * PDF link annotations render as empty anchors over the page, so they get
 * their accessible name from where they lead.
 */
function nameResumeLinks() {
  document.querySelectorAll(".react-pdf__Page__annotations a").forEach((link) => {
    const target = link.href.replace(/^(mailto:|https?:\/\/)/, "").replace(/\/$/, "");
    link.setAttribute("aria-label", `Resume link: ${target}`);
  });
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* The page is a rendered PDF, so the h1 is visually hidden but keeps
            the document outline and landmark navigation intact. */}
        <h1 className="visually-hidden-a11y">Resume — Dawid Olko</h1>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Dawid Olko's CV as PDF (opens in a new tab)"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading="Loading resume…"
            error="The resume could not be displayed. Use the Download CV button instead."
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} onRenderAnnotationLayerSuccess={nameResumeLinks} />
          </Document>
        </Row>

        {/* The hosted CV carries a Polish and an English version and prints to
            the same one-page layout, so it sits next to the download rather
            than replacing it. */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "0.75rem",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Dawid Olko's CV as PDF (opens in a new tab)"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href="https://cv.dawidolko.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the online CV at cv.dawidolko.pl (opens in a new tab)"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;View online
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
