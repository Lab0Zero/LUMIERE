"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "Lumière a su capturer l'essence même de notre collection. Leur sens du détail et leur compréhension du luxe sont incomparables.",
    author: "Claire Fontaine",
    role: "Directrice Image, Dior",
  },
  {
    quote: "Travailler avec Lumière, c'est l'assurance d'images qui racontent une histoire. Leur casting est toujours d'une justesse exceptionnelle.",
    author: "Antoine Mercier",
    role: "Rédacteur en chef, Vogue Paris",
  },
  {
    quote: "La rigueur de leur production et la créativité de leur direction artistique font de chaque campagne un moment de grâce.",
    author: "Isabella Rossi",
    role: "Brand Director, Valentino",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding-xl">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h6 className="mb-8 sm:mb-12">Témoignages</h6>
          </ScrollReveal>

          <div className="min-h-[200px] sm:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-light leading-snug text-foreground italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div className="mt-6 sm:mt-8">
                  <p className="text-sm font-medium text-foreground tracking-wide">
                    {testimonials[active].author}
                  </p>
                  <p className="text-sm text-foreground-tertiary mt-1">
                    {testimonials[active].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[2px] rounded-full transition-all duration-400 ${
                  i === active ? "w-8 bg-foreground" : "w-4 bg-foreground-muted hover:bg-foreground-tertiary"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
