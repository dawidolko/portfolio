import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import NotFound from "../NotFound";
import { dateRange, describeShot, loadMedia, MEDIA_ORIGIN, repoUrl, youtube } from "./projectUtils";
import "./ProjectUi.css";
import "./ProjectDetail.css";

/*
 * The native dialog already traps focus, closes on Escape and hands focus back
 * to the thumbnail that opened it.
 */
function Gallery({ project, items }) {
  const dialog = useRef(null);
  const [current, setCurrent] = useState(0);
  const count = items.length;
  const move = useCallback((index) => setCurrent((index + count) % count), [count]);
  const shot = items[current];

  const onKeyDown = (event) => {
    const moves = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: count - 1 };
    if (Object.prototype.hasOwnProperty.call(moves, event.key)) {
      event.preventDefault();
      move(moves[event.key]);
    }
  };

  return (
    <>
      <ul className="detail-gallery">
        {items.map((item, index) => (
          <li key={item.file}>
            <a
              className="detail-gallery__link"
              href={item.url}
              onClick={(event) => {
                event.preventDefault();
                setCurrent(index);
                dialog.current.showModal();
              }}>
              <img
                src={item.url}
                alt={`${project.title}, ${describeShot(item.file)}`}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        ))}
      </ul>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <dialog
        ref={dialog}
        className="detail-lightbox"
        aria-label="Screenshot viewer"
        onKeyDown={onKeyDown}
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}>
        <button
          type="button"
          className="detail-lightbox__control detail-lightbox__close"
          aria-label="Close viewer"
          onClick={() => dialog.current.close()}>
          <span aria-hidden="true">&times;</span>
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              className="detail-lightbox__control detail-lightbox__prev"
              aria-label="Previous screenshot"
              onClick={() => move(current - 1)}>
              <span aria-hidden="true">&lsaquo;</span>
            </button>
            <button
              type="button"
              className="detail-lightbox__control detail-lightbox__next"
              aria-label="Next screenshot"
              onClick={() => move(current + 1)}>
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </>
        )}
        <img className="detail-lightbox__image" src={shot.url} alt={`${project.title}, ${describeShot(shot.file)}`} />
        <p className="detail-lightbox__caption" aria-live="polite">
          {current + 1} of {count}
        </p>
      </dialog>
    </>
  );
}

function YouTubeVideo({ project, video, poster }) {
  const [playing, setPlaying] = useState(false);
  const frame = useRef(null);

  useEffect(() => {
    if (playing) frame.current.focus();
  }, [playing]);

  return (
    <>
      <div className={`detail-video${video.portrait ? " detail-video--portrait" : ""}`}>
        {playing ? (
          <iframe
            ref={frame}
            title={`${project.title} video`}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="detail-video__facade"
            aria-label={`Play video: ${project.title}`}
            onClick={() => setPlaying(true)}>
            {poster && <img src={poster} alt="" width="640" height="360" loading="lazy" decoding="async" />}
            <span className="detail-video__play" aria-hidden="true" />
          </button>
        )}
      </div>
      <p className="detail-note">
        <a href={project.video} target="_blank" rel="noopener noreferrer">
          Watch on YouTube<span className="visually-hidden-a11y"> (opens in a new tab)</span>
        </a>
      </p>
    </>
  );
}

/*
 * An animated WebP cannot be paused, so Stop swaps the still back in. The demo
 * file is only requested after Play, and nothing moves before that.
 */
function ScrollDemo({ project, src, still }) {
  const [playing, setPlaying] = useState(false);
  const shown = playing ? src : still;
  return (
    <figure className="detail-demo">
      {shown && <img src={shown} alt={`${project.title}, scrolling demo`} width="1280" height="720" loading="lazy" decoding="async" />}
      <button type="button" className="btn btn-primary" onClick={() => setPlaying(!playing)}>
        {playing ? "Stop demo" : "Play demo"}
      </button>
    </figure>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const [media, setMedia] = useState(null);

  useEffect(() => {
    let active = true;
    setMedia(null);
    loadMedia().then((all) => {
      if (active) setMedia(all[slug] || {});
    });
    return () => {
      active = false;
    };
  }, [slug]);

  const project = projects[index];

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title}: ${project.kind} | Dawid Olko`;
    document.querySelector('meta[name="description"]').setAttribute("content", `${project.title}: ${project.tagline}.`);
  }, [project]);

  if (!project) return <NotFound />;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const code = repoUrl(project);
  const video = youtube(project.video);
  const folder = `${MEDIA_ORIGIN}/src/assets/img/work/${slug}`;
  const gallery = ((media && media.gallery) || []).map((item) => ({ ...item, url: `${folder}/${item.file}` }));
  const absolute = (path) => (path ? `${MEDIA_ORIGIN}${path}` : "");

  return (
    <Container fluid className="project-detail">
      <Container className="project-detail__inner">
        <nav aria-label="Breadcrumb">
          <ol className="detail-crumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>
        <p className="detail-kind">{project.kind}</p>
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-dates">{dateRange(project)}</p>
        <p className="detail-tagline">{project.tagline}</p>
        {project.creditUrl && (
          <p className="detail-credit">
            <a href={project.creditUrl} target="_blank" rel="noopener noreferrer">
              {project.credit}
              <span className="visually-hidden-a11y"> (opens in a new tab)</span>
            </a>
          </p>
        )}
        <div className="detail-actions">
          {project.live && (
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer">
              Live site<span className="visually-hidden-a11y"> (opens in a new tab)</span>
            </a>
          )}
          {code && (
            <a className="btn btn-outline-light" href={code} target="_blank" rel="noopener noreferrer">
              Source code<span className="visually-hidden-a11y"> (opens in a new tab)</span>
            </a>
          )}
        </div>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About the project</h2>
          <p className="detail-text">{project.summary}</p>
        </section>
        <section aria-labelledby="shows-heading">
          <h2 id="shows-heading">What it demonstrates</h2>
          <ul className="detail-shows">
            {project.shows.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="stack-heading">
          <h2 id="stack-heading">Stack</h2>
          <ul className="detail-stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {gallery.length > 0 && (
          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading">Screenshots</h2>
            <Gallery key={slug} project={project} items={gallery} />
          </section>
        )}
        {video && (
          <section aria-labelledby="video-heading">
            <h2 id="video-heading">Video</h2>
            <YouTubeVideo key={slug} project={project} video={video} poster={media ? absolute(media.videoPoster) : ""} />
          </section>
        )}
        {!video && media && media.demo && (
          <section aria-labelledby="demo-heading">
            <h2 id="demo-heading">Demo</h2>
            <ScrollDemo key={slug} project={project} src={`${folder}/demo.webp`} still={absolute(media.still)} />
          </section>
        )}
        <nav className="detail-pager" aria-label="Other projects">
          <Link className="detail-pager__link" to={`/project/${prev.slug}`} rel="prev">
            <span>Previous project</span>
            {prev.title}
          </Link>
          <Link className="detail-pager__link detail-pager__link--next" to={`/project/${next.slug}`} rel="next">
            <span>Next project</span>
            {next.title}
          </Link>
        </nav>
      </Container>
    </Container>
  );
}

export default ProjectDetail;
