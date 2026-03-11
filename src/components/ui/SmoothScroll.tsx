"use client";
import { useEffect } from "react";

/**
 * Lightweight smooth scroll implementation inspired by Lenis.
 * Uses native smooth scrolling + easing for a buttery feel.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Only apply on desktop
    if (window.matchMedia("(hover: none)").matches) return;

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
