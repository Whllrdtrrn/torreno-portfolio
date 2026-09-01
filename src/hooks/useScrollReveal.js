import {useEffect} from "react";

// Blocks that fade and rise into place as they enter the viewport. Grouped by
// parent so siblings stagger instead of all arriving at once.
const TARGETS = [
  ".sectionLabel",
  "section > h2",
  ".aboutMe",
  ".aboutContent",
  ".approachCard",
  ".skillCard",
  ".skillGroupTitle",
  ".workMarquee",
  ".eduRow",
  ".serviceCard",
  ".portCard",
  ".leftContact .details",
  ".rightContact",
];

const STAGGER_MS = 70;
const MAX_STAGGER_MS = 350;
// Long enough for the CSS transition plus the largest stagger to finish.
const CLEANUP_MS = 1400;

/**
 * Reveals elements on scroll using IntersectionObserver.
 *
 * The hidden starting state is applied from JS rather than sitting in the
 * stylesheet, so if scripting or IntersectionObserver is unavailable the page
 * simply renders fully visible instead of blank.
 *
 * Once an element has finished animating, its classes and inline delay are
 * stripped so the element returns to its own stylesheet rules — otherwise the
 * reveal transition would linger and override hover transitions such as
 * `.portCard:hover`.
 */
const useScrollReveal = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll(TARGETS.join(",")));
    if (!elements.length) return;

    const timers = new Set();
    const counts = new Map();

    elements.forEach(el => {
      el.classList.add("reveal");

      const parent = el.parentElement;
      const index = counts.get(parent) || 0;
      counts.set(parent, index + 1);
      if (index) {
        el.style.transitionDelay = `${Math.min(
          index * STAGGER_MS,
          MAX_STAGGER_MS
        )}ms`;
      }
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          el.classList.add("revealVisible");
          observer.unobserve(el);

          const timer = setTimeout(() => {
            el.classList.remove("reveal", "revealVisible");
            el.style.transitionDelay = "";
            timers.delete(timer);
          }, CLEANUP_MS);
          timers.add(timer);
        });
      },
      {threshold: 0.12, rootMargin: "0px 0px -60px 0px"}
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      // Never leave anything stuck invisible if this unmounts mid-animation.
      elements.forEach(el => {
        el.classList.remove("reveal", "revealVisible");
        el.style.transitionDelay = "";
      });
    };
  }, []);
};

export default useScrollReveal;
