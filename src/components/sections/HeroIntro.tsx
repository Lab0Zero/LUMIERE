"use client";
import { useEffect, useRef } from "react";

/* Custom x positions to optically balance letter spacing.
   "I" is narrow → tighter gaps around it.
   "M" is wide → slightly more room.                        */
const LETTER_DATA = [
  { char: "L", x: 30 },
  { char: "U", x: 145 },
  { char: "M", x: 275 },
  { char: "I", x: 405 },
  { char: "È", x: 490 },
  { char: "R", x: 615 },
  { char: "E", x: 740 },
];

const TOTAL_DURATION = 4200;

export default function HeroIntro() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      el.style.opacity = "0";
    }, TOTAL_DURATION);

    const removeTimer = setTimeout(() => {
      el.style.display = "none";
      document.body.style.overflow = "";
    }, TOTAL_DURATION + 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div style={{ width: "90vw", maxWidth: "900px" }}>
        <svg
          viewBox="0 0 840 140"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", overflow: "visible" }}
        >
          {LETTER_DATA.map(({ char, x }, i) => (
            <text
              key={i}
              x={x}
              y="105"
              className="hero-intro__letter"
              style={{
                animationDelay: `${0.5 + i * 0.15}s, ${2.2 + i * 0.08}s`,
              }}
            >
              {char}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
