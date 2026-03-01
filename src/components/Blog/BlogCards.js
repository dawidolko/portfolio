import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function BlogCards(props) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <Card className="blog-card-view" onClick={() => setLightbox(true)}>
        <div className="blog-img-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="blog-img"
            className="blog-img"
            loading="lazy"
          />
          <div className="blog-card-overlay">
            <p>{props.description}</p>
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="blog-card-desc">{props.description}</Card.Text>
        </Card.Body>
      </Card>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(false)}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
            }}
            aria-label="Close">
            &times;
          </button>
          <img src={props.imgPath} alt={props.title} className="lightbox-img" />
          <p className="lightbox-caption">{props.title}</p>
        </div>
      )}
    </>
  );
}

export default BlogCards;
