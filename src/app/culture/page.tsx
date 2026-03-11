"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const cultureImages = [
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=85",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=85",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&q=85",
  "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=1600&q=85",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=85",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1600&q=85",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=85",
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
