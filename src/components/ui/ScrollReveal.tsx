"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  type?: "fadeUp" | "clipUp" | "fadeIn";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  type = "fadeUp",
  delay = 0,
  className = "",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (delay > 0) {
        setTimeout(() => el.classList.add("revealed"), delay * 1000);
      } else {
        el.classList.add("revealed");
      }
    };

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      requestAnimationFrame(() => requestAnimationFrame(reveal));
      return;
    }

    // Scroll-triggered reveal for off-screen elements
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass =
    type === "clipUp"
      ? "anim-clip-reveal"
      : type === "fadeIn"
      ? "anim-fade-in"
      : "anim-fade-up";

  return (
    <div ref={ref} className={`${animClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
