"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const cultureImages = [
  "https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=1600&q=85",
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=1600&q=85",
  "https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=1600&q=85",
  "https://images.unsplash.com/photo-1553544260-f87e671974ee?w=1600&q=85",
  "https://images.unsplash.com/photo-1575354196644-9de51010f481?w=1600&q=85",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&q=85",
  "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=1600&q=85",
  "https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?w=1600&q=85",
  "https://images.unsplash.com/photo-1621036570283-e270d46d3901?w=1600&q=85",
  "https://images.unsplash.com/photo-1595882669314-919b3d51f2c7?w=1600&q=85",
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
