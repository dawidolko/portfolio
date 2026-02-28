import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-card-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" loading="lazy" />
        <div className="project-card-overlay">
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
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
          {props.youtubeLink && (
            <Button variant="primary" href={props.youtubeLink} target="_blank">
              <BsYoutube /> &nbsp;Video
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
