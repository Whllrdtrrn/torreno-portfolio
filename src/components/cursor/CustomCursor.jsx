import React, {useEffect, useRef, useState} from "react";
import "./cursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Ring follows with lag (lerp)
    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    // Detect hover targets
    const onMouseOver = e => {
      const el = e.target.closest(
        "a, button, .portCard, .skillCard, .btn, .workCard, .details, .heroSocials a, .socialFooter a, .heroCardCta, .heroCardPhoto, [role='button']"
      );
      setIsHover(!!el);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursorDot ${isVisible ? "cursorVisible" : ""} ${isHover ? "cursorHover" : ""}`}
      />
      <div
        ref={ringRef}
        className={`cursorRing ${isVisible ? "cursorVisible" : ""} ${isHover ? "cursorHover" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
