import React, { useState } from "react";
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

/*
 * The preview stays underneath until the canvas is ready, and if the PDF fails.
 */
function ResumePdf({ file, width, onReady }) {
  const [links, setLinks] = useState(false);
  return (
    <Document file={file} className="resume-pdf" loading={null} error={null}>
      <Page
        pageNumber={1}
        width={width}
        loading={null}
        error={null}
        renderAnnotationLayer={links}
        onRenderSuccess={() => {
          setLinks(true);
          onReady();
        }}
        onRenderAnnotationLayerSuccess={nameResumeLinks}
      />
    </Document>
  );
}

export default ResumePdf;
