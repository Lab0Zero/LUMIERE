"use client";
import { useEffect, useRef } from "react";

const LETTERS = ["L", "U", "M", "I", "È", "R", "E"];
const TOTAL_DURATION = 4200;
const LETTER_COUNT = LETTERS.length; // 7

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

  /* Uniform spacing: divide viewBox into equal slots,
     place each letter at the CENTER of its slot using textAnchor="middle".
     This guarantees perfectly equal gaps regardless of letter width. */
  const viewW = 840;
  const slotW = viewW / LETTER_COUNT; // 120px per slot

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
          viewBox={`0 0 ${viewW} 140`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", overflow: "visible" }}
        >
          {LETTERS.map((char, i) => (
            <text
              key={i}
              x={slotW * i + slotW / 2}
              y="105"
              textAnchor="middle"
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
