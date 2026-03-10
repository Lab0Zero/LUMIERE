"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const articles = [
  {
    title: "Les tendances photographiques de la saison SS26",
    date: "Mars 2026",
    category: "Tendances",
    color: "#1a1a2a",
  },
  {
    title: "Behind the scenes : notre campagne Dior Haute Couture",
    date: "Février 2026",
    category: "Coulisses",
    color: "#2a1a1a",
  },
  {
    title: "Interview : Sofia Mauro, l'oeil qui réinvente la mode",
    date: "Janvier 2026",
    category: "Interview",
    color: "#1a2a1a",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Journal() {
  return (
    <section id="journal" className="section-padding-xl bg-background-secondary">
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h6 className="mb-3">Journal</h6>
              <h2>Dernières actualités</h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[13px] tracking-[0.05em]
                         text-foreground-secondary hover:text-foreground transition-colors duration-200 shrink-0"
            >
              Tous les articles
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 sm:mt-12 md:mt-16
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              href="#"
              variants={fadeUp}
              className="group block"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1a] mb-4 sm:mb-5"
              >
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ background: article.color }}
                >
                  <span className="text-white/15 text-xs tracking-[0.15em] uppercase">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-foreground-tertiary">{article.date}</span>
                <span className="text-foreground-muted text-xs">·</span>
                <span className="text-xs text-foreground-tertiary">{article.category}</span>
              </div>
              <h3 className="text-foreground group-hover:text-foreground-secondary transition-colors duration-300 leading-snug">
                {article.title}
              </h3>
              <div className="mt-3">
                <span className="inline-flex items-center gap-2 text-[13px] text-foreground-tertiary
                               group-hover:text-foreground group-hover:gap-3 transition-all duration-200">
                  Lire l&apos;article
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
