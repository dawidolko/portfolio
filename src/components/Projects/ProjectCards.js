import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";
import cards from "../../data/project-cards.json";
import ProjectTip from "./ProjectTip";
import { dateRange, repoUrl } from "./projectUtils";
import "./ProjectUi.css";

function ProjectCards({ slug, imgPath, description, eager }) {
  const project = cards.find((item) => item.slug === slug);
  const ghLink = repoUrl(project);
  const text = description || project.tagline;
  return (
    <Card className={`project-card-view${imgPath ? "" : " project-card-view--plain"}`}>
      {imgPath ? (
        <div className="project-card-img-wrapper">
          <Card.Img
            variant="top"
            src={imgPath}
            alt={`${project.title} project logo`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
          <div className="project-card-overlay" aria-hidden="true">
            <p>{text}</p>
          </div>
          <ProjectTip project={project} />
        </div>
      ) : (
        <ProjectTip project={project} />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        {!imgPath && <p className="project-card-date">{dateRange(project)}</p>}
        <Card.Text className="project-card-desc">{text}</Card.Text>
        <div className="mt-auto project-card-buttons">
          <Button as={Link} to={`/project/${slug}`} variant="primary">
            Show<span className="visually-hidden-a11y"> {project.title}</span>
          </Button>
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub (opens in a new tab)`}>
              <BsGithub aria-hidden="true" /> &nbsp;GitHub
            </Button>
          )}
          {project.live && (
            <Button
              variant="primary"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo (opens in a new tab)`}>
              <CgWebsite aria-hidden="true" /> &nbsp;Demo
            </Button>
          )}
          {!project.live && project.video && (
            <Button
              variant="primary"
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} video walkthrough on YouTube (opens in a new tab)`}>
              <BsYoutube aria-hidden="true" /> &nbsp;Video
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
