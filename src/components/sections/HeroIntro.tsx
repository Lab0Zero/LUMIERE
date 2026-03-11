"use client";
import { useState, useEffect, useRef } from "react";

const LETTERS = ["L", "U", "M", "I", "È", "R", "E"];
const TOTAL_DURATION = 4200; // ms total before fade out

export default function HeroIntro() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll during animation
    document.body.style.overflow = "hidden";

    // Start fade out after animation completes
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, TOTAL_DURATION);

    // Remove overlay after fade
    const removeTimer = setTimeout(() => {
      setVisible(false);
      setHasPlayed(true);
      document.body.style.overflow = "";
    }, TOTAL_DURATION + 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible && hasPlayed) return null;

  return (
    <div
      ref={containerRef}
      className={`hero-intro ${fadeOut ? "hero-intro--fade" : ""}`}
    >
      <div className="hero-intro__content">
        <svg
          className="hero-intro__svg"
          viewBox="0 0 900 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {LETTERS.map((letter, i) => (
            <text
              key={i}
              x={60 + i * 120}
              y="90"
              className="hero-intro__letter"
              style={{
                animationDelay: `${0.5 + i * 0.15}s, ${2.2 + i * 0.08}s`,
              }}
            >
              {letter}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
