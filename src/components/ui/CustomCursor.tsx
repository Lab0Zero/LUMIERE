"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (hidden) setHidden(false);
    };

    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);

    // Track hover on clickable/image elements
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImage = target.closest(".p-image, .g-item, .motion-thumb, .journal-img, .culture-img, .project-gallery-img");
      if (isImage) setHovering(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isImage = target.closest(".p-image, .g-item, .motion-thumb, .journal-img, .culture-img, .project-gallery-img");
      if (isImage) setHovering(false);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [hidden]);

  // Hide on mobile
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className={`cursor-dot ${hovering ? "cursor-expand" : ""}`} />
      <div
        ref={textRef}
        className={`cursor-text ${hovering ? "cursor-text-visible" : ""}`}
      >
        View
      </div>
    </div>
  );
}
