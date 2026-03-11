"use client";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Production Photo",
    description: "De la conception à la post-production, nous orchestrons chaque détail de vos shootings mode, beauté et lifestyle avec une exigence absolue.",
  },
  {
    number: "02",
    title: "Direction Artistique",
    description: "Notre regard unique façonne l'identité visuelle de vos campagnes. Moodboards, styling, casting — chaque élément est pensé pour créer l'émotion.",
  },
  {
    number: "03",
    title: "Casting & Management",
    description: "Accès exclusif à un réseau international de mannequins, talents et artistes. Nous trouvons le visage parfait pour incarner votre vision.",
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Retouche haute couture, color grading cinématographique et direction de la finalisation. Le détail fait la différence.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding-xl bg-background-secondary">
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <div>
              <h6 className="mb-3">Services</h6>
              <h2 className="max-w-xl">
                Une approche<br />
                <span className="italic font-light">sur mesure</span>
              </h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg max-w-md leading-relaxed">
              Chaque projet est unique. Notre expertise couvre l&apos;ensemble de la
              chaîne de création d&apos;images d&apos;exception.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              variants={fadeUp}
              className={`group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8
                         py-8 sm:py-10 md:py-12
                         ${i !== services.length - 1 ? "border-b border-border" : ""}
                         ${i === 0 ? "border-t border-border" : ""}`}
            >
              <div className="md:col-span-1">
                <span className="text-xs text-foreground-tertiary tracking-wide">{service.number}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-foreground group-hover:text-foreground-secondary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-foreground-secondary text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="md:col-span-2 flex items-start md:justify-end">
                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 text-[13px] tracking-[0.05em]
                             text-foreground-tertiary hover:text-foreground transition-colors duration-200"
                >
                  En savoir plus
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
