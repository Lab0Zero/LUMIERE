"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  client: string;
  photographer: string;
  images: number;
  color: string;
  ratio: string;
}

const projects: Project[] = [
  { slug: "dior-haute-couture", title: "Dior", client: "Dior", photographer: "Sofia Mauro", images: 12, color: "#8B6F4E", ratio: "2/3" },
  { slug: "chanel-n5", title: "Chanel", client: "Chanel N°5", photographer: "Marc Dubois", images: 6, color: "#2A3D5C", ratio: "1/1" },
  { slug: "vogue-cover", title: "Vogue Paris", client: "Vogue Paris", photographer: "Lena Ivanov", images: 8, color: "#4A6741", ratio: "3/4" },
  { slug: "ysl-rouge-pur", title: "YSL Beauty", client: "YSL Beauty", photographer: "Aiko Tanaka", images: 10, color: "#6B2D3E", ratio: "2/3" },
  { slug: "harpers-bazaar", title: "Harper's Bazaar", client: "Harper's Bazaar", photographer: "Elena Voss", images: 14, color: "#3D4A5C", ratio: "3/4" },
  { slug: "louis-vuitton", title: "Louis Vuitton", client: "Louis Vuitton", photographer: "Thomas Kring", images: 7, color: "#5C4A2A", ratio: "16/9" },
  { slug: "valentino", title: "Valentino", client: "Valentino", photographer: "Elena Voss", images: 6, color: "#8B3A4E", ratio: "2/3" },
  { slug: "guerlain", title: "Guerlain", client: "Guerlain", photographer: "Aiko Tanaka", images: 5, color: "#4E6B5A", ratio: "3/4" },
  { slug: "hermes", title: "Hermès", client: "Hermès", photographer: "Marc Dubois", images: 8, color: "#6B5A3A", ratio: "3/4" },
  { slug: "la-perla", title: "La Perla", client: "La Perla", photographer: "Sofia Mauro", images: 9, color: "#2A2A3D", ratio: "2/3" },
  { slug: "tom-ford", title: "Tom Ford", client: "Tom Ford", photographer: "Thomas Kring", images: 4, color: "#1A1A2A", ratio: "16/9" },
  { slug: "elle-rebel", title: "Elle", client: "Elle France", photographer: "Lena Ivanov", images: 11, color: "#5C3D2A", ratio: "3/4" },
  { slug: "cartier", title: "Cartier", client: "Cartier", photographer: "Sofia Mauro", images: 5, color: "#6B4A4A", ratio: "1/1" },
  { slug: "prada-luna", title: "Prada", client: "Prada Luna Rossa", photographer: "Thomas Kring", images: 7, color: "#2A3D3D", ratio: "2/3" },
  { slug: "givenchy", title: "Givenchy", client: "Givenchy", photographer: "Elena Voss", images: 6, color: "#3D2A4A", ratio: "3/4" },
  { slug: "bulgari", title: "Bulgari", client: "Bulgari", photographer: "Marc Dubois", images: 3, color: "#4A4A2A", ratio: "16/9" },
];

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
            <div style={{ aspectRatio: p.ratio, background: p.color, position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.15)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {p.client}
              </span>
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
          {/* Image count — col 1-2 */}
          <div className="p-count">
            <span>{p.images} Images</span>
          </div>

          {/* Image — col 3-6 */}
          <div className="p-image">
            <div
              style={{
                width: "100%",
                height: "100%",
                background: p.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {p.client}
              </span>
            </div>
          </div>

          {/* Details — col 7-12 */}
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
