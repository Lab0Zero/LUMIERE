"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="g-pad" style={{ paddingTop: 58 }}>
      {/* Top bar with project details toggle */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div style={{ gridColumn: "3 / 7" }}>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 10,
              fontWeight: 500,
              color: "var(--color-gray)",
            }}
          >
            Project Details {showDetails ? "−" : "+"}
          </button>
        </div>
      </div>

      {/* Expandable details */}
      {showDetails && (
        <div className="grid-12" style={{ marginBottom: 32 }}>
          <div style={{ gridColumn: "3 / 5" }}>
            <span className="p-label">Client</span>
            <p style={{ marginTop: 4 }}>{project.client}</p>
          </div>
          <div style={{ gridColumn: "5 / 7" }}>
            <span className="p-label">Photographer</span>
            <p style={{ marginTop: 4 }}>{project.photographer}</p>
          </div>
          <div style={{ gridColumn: "7 / 9" }}>
            <span className="p-label">Images</span>
            <p style={{ marginTop: 4 }}>{project.images}</p>
          </div>
          <div style={{ gridColumn: "9 / 11" }}>
            <span className="p-label">Category</span>
            <p style={{ marginTop: 4, textTransform: "capitalize" }}>{project.category}</p>
          </div>
        </div>
      )}

      {/* Metadata row */}
      <div className="grid-12" style={{ marginBottom: 16 }}>
        <div style={{ gridColumn: "1 / 3", display: "flex", alignItems: "flex-end" }}>
          <div>
            <span className="p-label">Client</span>{" "}
            <span style={{ fontWeight: 500 }}>{project.client}</span>
          </div>
        </div>
        <div style={{ gridColumn: "3 / 5", display: "flex", alignItems: "flex-end" }}>
          <div>
            <span className="p-label">Photographer</span>{" "}
            <span style={{ fontWeight: 500 }}>{project.photographer}</span>
          </div>
        </div>
      </div>

      {/* Gallery — horizontal scroll layout like GSP */}
      <div className="project-gallery">
        {project.gallery.map((src, i) => (
          <div key={i} className="project-gallery-img">
            <Image
              src={src}
              alt={`${project.client} — ${i + 1}`}
              width={800}
              height={1100}
              sizes="(max-width: 768px) 90vw, 440px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Back link */}
      <div style={{ padding: "40px 0 20px" }}>
        <Link
          href="/"
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "var(--color-gray)",
            transition: "color 0.2s",
          }}
        >
          &larr; Back to Stills
        </Link>
      </div>
    </div>
  );
}
