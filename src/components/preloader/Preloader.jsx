import React, {useState, useEffect, useRef} from "react";
import "./preloader.css";

const WORDMARK = "Whil.";

// Stop waiting after this long even if something never fires its load event,
// so a single broken asset can never trap the visitor behind the overlay.
const MAX_WAIT_MS = 12000;
// Minimum time on screen, so a warm cache doesn't make it flash and vanish.
const MIN_VISIBLE_MS = 3000;
// Beat of stillness at 100% before the curtain lifts, so the reveal reads as
// "finished" rather than the counter being yanked off screen mid-climb.
const HOLD_AT_FULL_MS = 700;
// How sharply the counter chases its target. Lower = smoother but laggier.
const EASE = 0.08;

// Number of points sampled along the waterline. More points = smoother crest,
// at the cost of a longer clip-path string to parse each frame.
const WAVE_POINTS = 28;
// Crest height, as a percentage of the wordmark's height.
const WAVE_AMPLITUDE = 2.4;

/**
 * Builds the liquid surface as a clip-path polygon: sample a waterline across
 * the width, then close the shape along the bottom. Two sine waves of
 * different frequency and drift direction are summed so the crest never
 * repeats in an obviously mechanical way.
 */
const buildWaveClip = (fillPercent, phase, flat) => {
  const waterline = 100 - fillPercent;

  // Settle the surface as it fills up or empties out, so the liquid comes to
  // rest instead of sloshing over the edge of the letters.
  const settle = Math.min(fillPercent, 100 - fillPercent) / 12;
  const amplitude = flat ? 0 : WAVE_AMPLITUDE * Math.min(settle, 1);

  const points = [];
  for (let i = 0; i <= WAVE_POINTS; i++) {
    const ratio = i / WAVE_POINTS;
    const x = ratio * 100;
    const y =
      waterline +
      Math.sin(ratio * Math.PI * 3 + phase) * amplitude +
      Math.sin(ratio * Math.PI * 5 - phase * 1.4) * amplitude * 0.4;
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${points.join(", ")}, 100% 100%, 0% 100%)`;
};

const Preloader = () => {
  const [frame, setFrame] = useState({
    progress: 0,
    clip: buildWaveClip(0, 0, true),
  });
  const [isDone, setIsDone] = useState(false); // counter reached 100
  const [isExiting, setIsExiting] = useState(false); // curtain lifting
  const [isGone, setIsGone] = useState(false); // unmounted
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf;
    let shown = 0; // eased value actually rendered
    let phase = 0; // drives the wave's horizontal drift
    let windowLoaded = document.readyState === "complete";
    let fontsLoaded = false;

    const onLoad = () => {
      windowLoaded = true;
    };
    window.addEventListener("load", onLoad);

    // Wait for webfonts too. Revealing the page before Poppins has arrived
    // causes a visible text reflow a moment after the curtain lifts.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsLoaded = true;
      });
    } else {
      fontsLoaded = true;
    }

    const timeout = setTimeout(() => {
      windowLoaded = true;
      fontsLoaded = true;
    }, MAX_WAIT_MS);

    const tick = () => {
      // Real progress: how many of the page's images have finished decoding.
      // Reading the live document keeps this in sync with whatever the app
      // renders — no hardcoded asset list to maintain.
      const images = Array.from(document.images);
      const ratio = images.length
        ? images.filter(img => img.complete).length / images.length
        : 0;

      // Two independent clocks, and the slower one wins.
      //
      // timeRatio ramps steadily across the minimum duration, so a warm cache
      // still gets a smooth climb instead of snapping to full and waiting.
      // loadRatio holds it back while real work is outstanding, and is capped
      // just under 1 until the window and fonts are in, so the counter never
      // reads 100% while something is still arriving.
      const elapsed = Date.now() - startedAt.current;
      const timeRatio = Math.min(elapsed / MIN_VISIBLE_MS, 1);
      const loadRatio =
        windowLoaded && fontsLoaded ? 1 : Math.min(ratio, 0.98);

      const target = Math.min(timeRatio, loadRatio) * 100;

      // Ease toward the target instead of snapping to it: the number climbs
      // at a steady readable pace no matter how the assets actually land.
      shown += (target - shown) * (reduceMotion ? 1 : EASE);
      if (target - shown < 0.3) shown = target;

      phase += 0.055;
      setFrame({
        progress: shown,
        clip: buildWaveClip(shown, phase, reduceMotion),
      });

      if (shown >= 99.9) {
        setIsDone(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Lock scrolling while the overlay covers the page.
  useEffect(() => {
    if (isGone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isGone]);

  // Sit at 100% for a beat, then lift the curtain.
  useEffect(() => {
    if (!isDone) return;
    const timer = setTimeout(() => setIsExiting(true), HOLD_AT_FULL_MS);
    return () => clearTimeout(timer);
  }, [isDone]);

  // Unmount once the exit transition has played out.
  useEffect(() => {
    if (!isExiting) return;
    const timer = setTimeout(() => setIsGone(true), 1100);
    return () => clearTimeout(timer);
  }, [isExiting]);

  if (isGone) return null;

  const rounded = Math.round(frame.progress);

  return (
    <div
      className={`preloader ${isExiting ? "preloaderExit" : ""}`}
      role="progressbar"
      aria-label="Loading portfolio"
      aria-valuenow={rounded}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="preloaderInner">
        <div className="preloaderWord" aria-hidden="true">
          <span className="preloaderWordBase">{WORDMARK}</span>
          <span className="preloaderWordFill" style={{clipPath: frame.clip}}>
            {WORDMARK}
          </span>
        </div>

        <div className="preloaderCount">
          loading... <span className="preloaderNum">{rounded}</span>%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
