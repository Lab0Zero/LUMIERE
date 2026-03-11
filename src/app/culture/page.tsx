"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const cultureImages = [
  "https://images.unsplash.com/photo-1638337935003-e17cf483ca8d?w=1600&q=85",
  "https://images.unsplash.com/photo-1663691219171-93494f63b5c9?w=1600&q=85",
  "https://images.unsplash.com/photo-1759090889296-1b82083f981d?w=1600&q=85",
  "https://images.unsplash.com/photo-1767570278483-328dfeccef89?w=1600&q=85",
  "https://images.unsplash.com/photo-1730320915228-f70e3c43aa7d?w=1600&q=85",
  "https://images.unsplash.com/photo-1652281846249-fd131a6cca36?w=1600&q=85",
  "https://images.unsplash.com/photo-1590131222139-91ba5992e4ed?w=1600&q=85",
  "https://images.unsplash.com/photo-1763906473317-c9193c8ef05a?w=1600&q=85",
  "https://images.unsplash.com/photo-1693645325828-62cd35c8da8f?w=1600&q=85",
  "https://images.unsplash.com/photo-1633701394188-c11a1e6a4e26?w=1600&q=85",
];

export default function CulturePage() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === active || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setTimeout(() => setTransitioning(false), 100);
    }, 300);
  }, [active, transitioning]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % cultureImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <div style={{ paddingTop: 40 }}>
      {/* Main image with fade transition */}
      <div className="culture-viewer">
        <div
          className="culture-img"
          style={{
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <Image
            src={cultureImages[active]}
            alt={`Culture ${active + 1}`}
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      {/* Progress bar with animated segments */}
      <div className="culture-bar">
        {cultureImages.map((_, i) => (
          <button
            key={`${i}-${active}`}
            onClick={() => goTo(i)}
            className={`culture-segment ${i === active ? "active" : ""}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
