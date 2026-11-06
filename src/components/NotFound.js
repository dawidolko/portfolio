import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page not found | Dawid Olko";
  }, []);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Page <strong className="purple">not found</strong>
        </h1>
        <p style={{ color: "white" }}>This address does not exist on this site.</p>
        <p>
          <Link className="btn btn-primary" to="/">
            Back to the home page
          </Link>
        </p>
      </Container>
    </Container>
  );
}

export default NotFound;
