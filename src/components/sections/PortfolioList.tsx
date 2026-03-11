"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function PortfolioList() {
  const [view, setView] = useState<"list" | "grid">("list");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setView(detail);
    };
    window.addEventListener("viewchange", handler);
    return () => window.removeEventListener("viewchange", handler);
  }, []);

  if (view === "grid") {
    return (
      <div className="portfolio-grid" style={{ paddingTop: 58 }}>
        {projects.map((p) => (
          <Link key={p.slug} href={`/stills/${p.slug}`} className="g-item">
            <div style={{ aspectRatio: p.ratio, position: "relative", overflow: "hidden" }}>
              <Image
                src={p.cover}
                alt={p.client}
                fill
                sizes="(max-width: 768px) 50vw, 16.6vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="g-name">{p.title}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="g-pad" style={{ paddingTop: 58 }}>
      {projects.map((p) => (
        <Link key={p.slug} href={`/stills/${p.slug}`} className="project-card">
          <div className="p-count">
            <span>{p.images} Images</span>
          </div>

          <div className="p-image">
            <Image
              src={p.cover}
              alt={p.client}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="p-details">
            <div style={{ gridColumn: "1 / 3" }}>
              <span className="p-label">Client</span>
            </div>
            <div style={{ gridColumn: "3 / 5" }}>
              <span>{p.client}</span>
            </div>
            <div style={{ gridColumn: "5 / 6" }}>
              <span className="p-label">Photographer</span>
            </div>
            <div style={{ gridColumn: "6 / 7" }}>
              <span>{p.photographer}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
