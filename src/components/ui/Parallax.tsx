"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 0.02 = subtle, 0.05 = moderate
  className?: string;
}

/**
 * GSP-style subtle parallax on scroll.
 * Images translate slightly on Y axis as you scroll.
 */
export default function Parallax({ children, speed = 0.03, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const viewH = window.innerHeight;
          // Only animate when visible
          if (rect.bottom > 0 && rect.top < viewH) {
            const center = rect.top + rect.height / 2;
            const offset = (center - viewH / 2) * speed;
            el.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial position

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
