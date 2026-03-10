"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "200+", label: "Campagnes réalisées" },
  { value: "15", label: "Années d'expertise" },
  { value: "50+", label: "Magazines partenaires" },
  { value: "12", label: "Pays couverts" },
];

export default function About() {
  return (
    <section id="about" className="section-padding-xl">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left — Image */}
          <ScrollReveal>
            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/15 text-xs tracking-[0.2em] uppercase">Studio Lumière</span>
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-4 sm:inset-6 border border-white/10" />
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <h6 className="mb-3">À propos</h6>
              <h2>
                L&apos;excellence au<br />
                <span className="italic font-light">service de l&apos;image</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-6 sm:mt-8 text-foreground-secondary text-base sm:text-lg leading-relaxed">
                Fondée à Paris, Lumière est une agence photo haut de gamme
                dédiée à la création d&apos;images qui marquent les esprits.
                Nous collaborons avec les plus grands noms de la mode, de la
                beauté et du luxe.
              </p>
              <p className="mt-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
                Notre réseau exclusif de photographes, directeurs artistiques
                et mannequins internationaux nous permet de donner vie aux
                visions les plus ambitieuses, de la campagne publicitaire
                mondiale à l&apos;éditorial de couverture.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <motion.p
                      className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-none tracking-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="mt-2 text-sm text-foreground-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
