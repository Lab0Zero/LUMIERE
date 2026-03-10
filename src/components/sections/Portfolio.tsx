"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Project {
  id: number;
  title: string;
  client: string;
  photographer: string;
  category: string;
  images: number;
  aspectRatio: string;
  color: string;
}

const categories = ["Tous", "Fashion", "Beauty", "Editorial", "Campaign"];

const projects: Project[] = [
  { id: 1, title: "Dior — Haute Couture SS26", client: "Dior", photographer: "Sofia Mauro", category: "Fashion", images: 12, aspectRatio: "3/4", color: "#2a2a2a" },
  { id: 2, title: "Vogue Paris — Cover Story", client: "Vogue", photographer: "Lena Ivanov", category: "Editorial", images: 8, aspectRatio: "4/5", color: "#3a3028" },
  { id: 3, title: "Chanel — N°5 L'Eau", client: "Chanel", photographer: "Marc Dubois", category: "Campaign", images: 6, aspectRatio: "16/11", color: "#1a1a2a" },
  { id: 4, title: "YSL Beauty — Rouge Pur", client: "YSL", photographer: "Aiko Tanaka", category: "Beauty", images: 10, aspectRatio: "3/4", color: "#2a1a1a" },
  { id: 5, title: "Harper's Bazaar — The New Wave", client: "Harper's Bazaar", photographer: "Elena Voss", category: "Editorial", images: 14, aspectRatio: "4/5", color: "#1a2a2a" },
  { id: 6, title: "Louis Vuitton — Travel Spirit", client: "Louis Vuitton", photographer: "Thomas Kring", category: "Campaign", images: 7, aspectRatio: "16/11", color: "#2a2a1a" },
  { id: 7, title: "La Perla — Intimissimi", client: "La Perla", photographer: "Sofia Mauro", category: "Fashion", images: 9, aspectRatio: "3/4", color: "#1a1a1a" },
  { id: 8, title: "Guerlain — Mon Guerlain", client: "Guerlain", photographer: "Aiko Tanaka", category: "Beauty", images: 5, aspectRatio: "4/5", color: "#2a2028" },
  { id: 9, title: "Elle — Rebel Chic", client: "Elle", photographer: "Lena Ivanov", category: "Editorial", images: 11, aspectRatio: "16/11", color: "#28201a" },
  { id: 10, title: "Hermès — Le Jardin", client: "Hermès", photographer: "Marc Dubois", category: "Campaign", images: 8, aspectRatio: "3/4", color: "#1a2820" },
  { id: 11, title: "Valentino — Born in Roma", client: "Valentino", photographer: "Elena Voss", category: "Fashion", images: 6, aspectRatio: "4/5", color: "#2a1020" },
  { id: 12, title: "Tom Ford — Noir Extreme", client: "Tom Ford", photographer: "Thomas Kring", category: "Beauty", images: 4, aspectRatio: "16/11", color: "#101020" },
];

type ViewMode = "grid" | "list";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filtered = activeCategory === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding-xl">
      <div className="container-site">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <div>
              <h6 className="mb-3">Portfolio</h6>
              <h2>Nos réalisations</h2>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-1 text-[13px]">
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1.5 transition-colors duration-200 ${
                    viewMode === "list" ? "text-foreground" : "text-foreground-tertiary hover:text-foreground-secondary"
                  }`}
                >
                  List
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 transition-colors duration-200 ${
                    viewMode === "grid" ? "text-foreground" : "text-foreground-tertiary hover:text-foreground-secondary"
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 sm:mt-10 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 -mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[13px] tracking-[0.03em] px-4 py-2 transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "bg-foreground text-white"
                    : "text-foreground-secondary hover:text-foreground border border-border hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid view */}
        {viewMode === "grid" && (
          <motion.div
            layout
            className="mt-8 sm:mt-10 md:mt-12
                       grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <a href="#" className="group block">
                    <div className="portfolio-item" style={{ aspectRatio: project.aspectRatio }}>
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: project.color }}
                      >
                        <span className="text-white/20 text-xs tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                      <div className="overlay" />
                      <div className="info">
                        <p className="text-white text-[15px] font-medium">{project.title}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-white/60 text-xs">{project.photographer}</span>
                          <span className="text-white/30 text-xs">·</span>
                          <span className="text-white/60 text-xs">{project.images} Images</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* List view */}
        {viewMode === "list" && (
          <div className="mt-8 sm:mt-10 md:mt-12">
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 text-[11px] tracking-[0.1em] uppercase text-foreground-tertiary border-b border-border">
              <div className="col-span-5">Projet</div>
              <div className="col-span-2">Client</div>
              <div className="col-span-3">Photographe</div>
              <div className="col-span-1">Images</div>
              <div className="col-span-1 text-right">Type</div>
            </div>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.a
                  key={project.id}
                  href="#"
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4
                             py-5 md:py-4 border-b border-border
                             hover:bg-background-secondary transition-colors duration-200 md:px-2"
                >
                  <div className="md:col-span-5 flex items-center gap-4">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 shrink-0"
                      style={{ background: project.color }}
                    />
                    <span className="text-[15px] font-medium text-foreground group-hover:text-foreground-secondary transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <div className="md:col-span-2 flex items-center">
                    <span className="text-sm text-foreground-secondary">{project.client}</span>
                  </div>
                  <div className="md:col-span-3 flex items-center">
                    <span className="text-sm text-foreground-secondary">{project.photographer}</span>
                  </div>
                  <div className="md:col-span-1 flex items-center">
                    <span className="text-sm text-foreground-tertiary">{project.images}</span>
                  </div>
                  <div className="md:col-span-1 flex items-center md:justify-end">
                    <span className="text-xs tracking-wide text-foreground-tertiary uppercase">{project.category}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
