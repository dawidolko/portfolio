import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";

function BlogCards(props) {
  const [lightbox, setLightbox] = useState(false);
  const cardRef = useRef(null);
  const closeBtnRef = useRef(null);

  const openLightbox = () => setLightbox(true);
  const closeLightbox = () => setLightbox(false);

  // The card is a div, so it needs explicit keyboard activation (Enter / Space)
  // to be operable without a mouse.
  const handleCardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      openLightbox();
    }
  };

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.stopPropagation();
        closeLightbox();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Move focus into the dialog so keyboard users are not left behind it.
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  // Return focus to the card that opened the lightbox once it closes.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !lightbox && cardRef.current) {
      cardRef.current.focus();
    }
    wasOpen.current = lightbox;
  }, [lightbox]);

  return (
    <>
      <Card
        ref={cardRef}
        className="blog-card-view"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`${props.title} — open full size image`}
        onClick={openLightbox}
        onKeyDown={handleCardKeyDown}>
        <div className="blog-img-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt=""
            className="blog-img"
            loading="lazy"
            decoding="async"
          />
          <div className="blog-card-overlay" aria-hidden="true">
            <p>{props.description}</p>
          </div>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="blog-card-desc">{props.description}</Card.Text>
        </Card.Body>
      </Card>

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${props.title} — full size image`}
          onClick={closeLightbox}>
          <button
            type="button"
            ref={closeBtnRef}
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image preview">
            <span aria-hidden="true">&times;</span>
          </button>
          <img src={props.imgPath} alt={props.title} className="lightbox-img" />
          <p className="lightbox-caption">{props.title}</p>
        </div>
      )}
    </>
  );
}

export default BlogCards;
