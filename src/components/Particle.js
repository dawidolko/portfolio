import React, { lazy, Suspense, useEffect, useState } from "react";

const Particles = lazy(() => import("react-tsparticles"));
const START_DELAY = 3000;

/*
 * The canvas is decoration and its library is the largest script on the site,
 * so it arrives after the page is usable and not at all for visitors who asked
 * for reduced motion.
 */
function Particle() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setTimeout(() => setStart(true), START_DELAY);
    return () => clearTimeout(timer);
  }, []);

  if (!start) return null;

  return (
    /*
     * Purely decorative background canvas: hidden from assistive technology
     * and never focusable or interactive (pointer events are disabled in CSS).
     */
    <div aria-hidden="true" role="presentation" className="particles-wrapper">
      <Suspense fallback={null}>
        <Particles
          id="tsparticles"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: false,
                opacity: 0.03,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: false,
                },
                value: 0.3,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </Suspense>
    </div>
  );
}

export default Particle;
