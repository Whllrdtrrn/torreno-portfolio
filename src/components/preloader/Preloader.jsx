import React, {useState, useEffect, useRef} from "react";
import "./preloader.css";

const MAX_WAIT_MS = 10000;
const MIN_VISIBLE_MS = 2200;
const HOLD_AT_FULL_MS = 400;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isGone, setIsGone] = useState(false);
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf;
    let shown = 0;
    let windowLoaded = document.readyState === "complete";
    let fontsLoaded = false;

    const onLoad = () => { windowLoaded = true; };
    window.addEventListener("load", onLoad);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { fontsLoaded = true; });
    } else {
      fontsLoaded = true;
    }

    const timeout = setTimeout(() => {
      windowLoaded = true;
      fontsLoaded = true;
    }, MAX_WAIT_MS);

    const tick = () => {
      const images = Array.from(document.images);
      const ratio = images.length
        ? images.filter(img => img.complete).length / images.length
        : 0;

      const elapsed = Date.now() - startedAt.current;
      const timeRatio = Math.min(elapsed / MIN_VISIBLE_MS, 1);
      const loadRatio =
        windowLoaded && fontsLoaded ? 1 : Math.min(ratio, 0.98);
      const target = Math.min(timeRatio, loadRatio) * 100;

      shown += (target - shown) * (reduceMotion ? 1 : 0.08);
      if (target - shown < 0.3) shown = target;
      setProgress(shown);

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

  useEffect(() => {
    if (isGone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [isGone]);

  useEffect(() => {
    if (!isDone) return;
    const timer = setTimeout(() => setIsExiting(true), HOLD_AT_FULL_MS);
    return () => clearTimeout(timer);
  }, [isDone]);

  useEffect(() => {
    if (!isExiting) return;
    const timer = setTimeout(() => setIsGone(true), 1000);
    return () => clearTimeout(timer);
  }, [isExiting]);

  if (isGone) return null;

  const rounded = Math.round(progress);

  return (
    <div className={`preloader ${isExiting ? "preloaderExit" : ""}`}>
      <div className="preloaderInner">
        <span className="preloaderName">Whil.</span>
        <div className="preloaderBar">
          <div
            className="preloaderFill"
            style={{width: `${progress}%`}}
          />
        </div>
        <span className="preloaderNum">{rounded}%</span>
      </div>
    </div>
  );
};

export default Preloader;
