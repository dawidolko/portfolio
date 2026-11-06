import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { dateRange } from "./projectUtils";

const GAP = 10;
const EDGE = 8;
const ARROW_INSET = 14;
const LEAVE_DELAY = 180;
const FADE = 160;

let closeOpenTip = null;

/*
 * Hover, keyboard focus and tap all open the same tooltip, and WCAG 1.4.13
 * decides the rest: Escape dismisses without moving focus, the pointer can
 * travel onto the tooltip, and it stays until it is dismissed or the pointer
 * and focus have both left.
 *
 * It renders through a portal because the cards are transformed and clip their
 * content, which would trap a fixed element inside the card.
 */
function ProjectTip({ project }) {
  const id = `tip-${project.slug}`;
  const button = useRef(null);
  const tip = useRef(null);
  const state = useRef({ open: false, pinned: false, overTip: false, leave: 0, fade: 0, frame: 0 });
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const close = useCallback(() => {
    const s = state.current;
    clearTimeout(s.leave);
    cancelAnimationFrame(s.frame);
    if (!s.open) return;
    s.open = false;
    s.pinned = false;
    s.overTip = false;
    closeOpenTip = null;
    setVisible(false);
    s.fade = setTimeout(() => setOpen(false), FADE);
  }, []);

  const show = useCallback(() => {
    const s = state.current;
    clearTimeout(s.leave);
    clearTimeout(s.fade);
    if (s.open) return;
    if (closeOpenTip) closeOpenTip();
    closeOpenTip = close;
    s.open = true;
    setOpen(true);
  }, [close]);

  const leaveSoon = useCallback(() => {
    const s = state.current;
    clearTimeout(s.leave);
    s.leave = setTimeout(() => {
      if (!s.pinned && !s.overTip) close();
    }, LEAVE_DELAY);
  }, [close]);

  useLayoutEffect(() => {
    if (!open) return undefined;
    const s = state.current;
    const place = () => {
      if (!s.open) return;
      const box = button.current.getBoundingClientRect();
      const node = tip.current;
      const width = node.offsetWidth;
      const height = node.offsetHeight;
      const viewWidth = document.documentElement.clientWidth;
      const viewHeight = window.innerHeight;
      if (box.bottom < 0 || box.top > viewHeight) {
        close();
        return;
      }
      const center = box.left + box.width / 2;
      const above = box.top - GAP - height >= EDGE || box.bottom + GAP + height > viewHeight - EDGE;
      const left = Math.max(EDGE, Math.min(center - width / 2, viewWidth - width - EDGE));
      const top = Math.max(EDGE, Math.min(above ? box.top - GAP - height : box.bottom + GAP, viewHeight - height - EDGE));
      node.style.transform = `translate(${Math.round(left)}px,${Math.round(top)}px)`;
      node.style.setProperty("--tip-arrow", `${Math.max(ARROW_INSET, Math.min(center - left, width - ARROW_INSET))}px`);
      node.setAttribute("data-placement", above ? "top" : "bottom");
      s.frame = requestAnimationFrame(place);
    };
    place();
    const fadeIn = requestAnimationFrame(() => setVisible(true));
    return () => {
      cancelAnimationFrame(s.frame);
      cancelAnimationFrame(fadeIn);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") close();
    };
    const onPointer = (event) => {
      if (!button.current.contains(event.target) && !tip.current.contains(event.target)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  useEffect(() => {
    const s = state.current;
    return () => {
      clearTimeout(s.leave);
      clearTimeout(s.fade);
      cancelAnimationFrame(s.frame);
      if (s.open) closeOpenTip = null;
    };
  }, []);

  const onClick = (event) => {
    const s = state.current;
    const fromKeyboard = event.detail === 0;
    if (!s.open) {
      show();
      s.pinned = true;
    } else if (s.pinned || fromKeyboard) {
      close();
    } else {
      s.pinned = true;
    }
  };

  return (
    <>
      <button
        ref={button}
        type="button"
        className="tip-btn"
        aria-label={`About ${project.title}`}
        aria-describedby={id}
        onClick={onClick}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") show();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse" && state.current.open) leaveSoon();
        }}
        onFocus={(event) => {
          if (event.currentTarget.matches(":focus-visible")) show();
        }}
        onBlur={() => {
          if (state.current.open && !state.current.overTip) {
            state.current.pinned = false;
            leaveSoon();
          }
        }}>
        <span aria-hidden="true">i</span>
      </button>
      {createPortal(
        <div
          ref={tip}
          id={id}
          role="tooltip"
          className={`tip${visible ? " tip--open" : ""}`}
          hidden={!open}
          onPointerEnter={() => {
            state.current.overTip = true;
            clearTimeout(state.current.leave);
          }}
          onPointerLeave={() => {
            state.current.overTip = false;
            leaveSoon();
          }}>
          <p className="tip__title">{project.title}</p>
          <p className="tip__date">{dateRange(project)}</p>
          <p className="tip__kind">{project.kind}</p>
          <p className="tip__label">Demonstrates</p>
          <ul className="tip__list">
            {project.shows.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}

export default ProjectTip;
