"use client";
import { useState } from "react";
import Image from "next/image";

const cultureImages = [
  "https://images.unsplash.com/photo-1516914589923-f105f1535f88?w=1400&q=80",
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1400&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1400&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1400&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1400&q=80",
];

export default function CulturePage() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ paddingTop: 40 }}>
      {/* Main image */}
      <div className="culture-viewer">
        <div className="culture-img">
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

      {/* Progress bar */}
      <div className="culture-bar">
        {cultureImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`culture-segment ${i === active ? "active" : ""}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
