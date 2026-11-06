import React, { lazy, Suspense, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../assets/Dawid_Olko_CV.pdf";
import preview714 from "../../assets/Resume/cv-714.webp";
import preview1012 from "../../assets/Resume/cv-1012.webp";
import preview2024 from "../../assets/Resume/cv-2024.webp";
import { AiOutlineDownload } from "react-icons/ai";

const ResumePdf = lazy(() => import("./ResumePdf"));

/*
 * The page opens on a picture of the CV. react-pdf with its worker is the
 * heaviest thing on the site and takes the main thread for seconds on a phone,
 * so it loads when somebody reaches for the page: the pointer arriving over it,
 * or a tap, click or key press. It then replaces the picture with the real
 * document, with selectable text and working links.
 */
function ResumeNew() {
  const page = useRef(null);
  const [wanted, setWanted] = useState(false);
  const [ready, setReady] = useState(false);
  const movedFocus = useRef(false);

  const onReady = () => {
    setReady(true);
    if (movedFocus.current) page.current.focus();
  };

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
            aria-label="Download CV as PDF (opens in a new tab)"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="resume-page" ref={page} tabIndex={-1}>
            <button
              type="button"
              className="resume-preview"
              hidden={ready}
              aria-label="Resume of Dawid Olko, shown as a picture. Open the document with selectable text and links"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setWanted(true);
              }}
              onClick={(event) => {
                movedFocus.current = event.detail === 0;
                setWanted(true);
              }}
            >
              <img
                src={preview1012}
                srcSet={`${preview714} 714w, ${preview1012} 1012w, ${preview2024} 2024w`}
                sizes="(max-width: 786px) 357px, 1011px"
                width="1012"
                height="1433"
                alt=""
                fetchpriority="high"
              />
            </button>
            {wanted && (
              <Suspense fallback={null}>
                <ResumePdf file={pdf} width={page.current.clientWidth} onReady={onReady} />
              </Suspense>
            )}
          </div>
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
            aria-label="Download CV as PDF (opens in a new tab)"
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
            aria-label="View online at cv.dawidolko.pl (opens in a new tab)"
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
