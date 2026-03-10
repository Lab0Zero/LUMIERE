"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="section-padding-xl">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <ScrollReveal>
              <h6 className="mb-3">Contact</h6>
              <h2>
                Parlons de votre<br />
                <span className="italic font-light">prochain projet</span>
              </h2>
              <p className="mt-5 sm:mt-6 text-foreground-secondary text-base sm:text-lg leading-relaxed max-w-md">
                Que vous prépariez une campagne de mode, un éditorial ou un
                lookbook, nous sommes prêts à donner vie à votre vision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 sm:mt-12 space-y-6">
                <div>
                  <p className="text-xs tracking-[0.12em] uppercase text-foreground-tertiary mb-1">Email</p>
                  <a href="mailto:contact@lumiere-agency.com" className="text-foreground hover:text-foreground-secondary transition-colors text-base">
                    contact@lumiere-agency.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.12em] uppercase text-foreground-tertiary mb-1">Téléphone</p>
                  <p className="text-foreground text-base">+33 1 42 86 00 00</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.12em] uppercase text-foreground-tertiary mb-1">Studio</p>
                  <p className="text-foreground text-base">
                    18 Rue du Faubourg Saint-Honoré<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.1}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-foreground-tertiary mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-[15px]
                               placeholder:text-foreground-muted focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-foreground-tertiary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground text-[15px]
                               placeholder:text-foreground-muted focus:outline-none focus:border-foreground transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-foreground-tertiary mb-2">
                  Type de projet
                </label>
                <select className="w-full bg-transparent border-b border-border py-3 text-foreground text-[15px]
                                   focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer">
                  <option value="">Sélectionnez</option>
                  <option value="campaign">Campagne publicitaire</option>
                  <option value="editorial">Éditorial / Magazine</option>
                  <option value="lookbook">Lookbook</option>
                  <option value="beauty">Beauté / Cosmétiques</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-foreground-tertiary mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground text-[15px]
                             placeholder:text-foreground-muted focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full sm:w-auto mt-4"
              >
                Envoyer la demande
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
