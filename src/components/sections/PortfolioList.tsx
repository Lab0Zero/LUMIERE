"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
        {projects.map((p, i) => (
          <ScrollReveal key={p.slug} type="clipUp" delay={(i % 6) * 0.06}>
            <Link href={`/stills/${p.slug}`} className="g-item">
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
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return (
    <div className="g-pad" style={{ paddingTop: 58 }}>
      {projects.map((p) => (
        <Link key={p.slug} href={`/stills/${p.slug}`} className="project-card">
          <ScrollReveal type="fadeUp" delay={0.1} className="p-count">
            <span>{p.images} Images</span>
          </ScrollReveal>

          <div className="p-image">
            <ScrollReveal
              type="clipUp"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <Image
                src={p.cover}
                alt={p.client}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal type="fadeUp" delay={0.2} className="p-details">
            <div style={{ gridColumn: "1 / 2" }}>
              <span className="p-label">Client</span>
            </div>
            <div style={{ gridColumn: "2 / 3" }}>
              <span>{p.client}</span>
            </div>
            <div style={{ gridColumn: "3 / 4" }}>
              <span className="p-label">Photographer</span>
            </div>
            <div style={{ gridColumn: "4 / 6" }}>
              <span>{p.photographer}</span>
            </div>
          </ScrollReveal>
        </Link>
      ))}
    </div>
  );
}
