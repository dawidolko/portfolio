import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-wrapper">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} project logo`}
          loading="lazy"
          decoding="async"
        />
        <div className="project-card-overlay" aria-hidden="true">
          <p>{props.description}</p>
        </div>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-desc">
          {props.description}
        </Card.Text>
        <div className="mt-auto project-card-buttons">
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.title} source code on GitHub (opens in a new tab)`}>
              <BsGithub aria-hidden="true" /> &nbsp;GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.title} live demo (opens in a new tab)`}>
              <CgWebsite aria-hidden="true" /> &nbsp;Demo
            </Button>
          )}
          {props.youtubeLink && (
            <Button
              variant="primary"
              href={props.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.title} video walkthrough on YouTube (opens in a new tab)`}>
              <BsYoutube aria-hidden="true" /> &nbsp;Video
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
