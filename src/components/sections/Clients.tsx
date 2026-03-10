"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";

const clients = [
  "Dior", "Chanel", "Louis Vuitton", "Vogue", "Harper's Bazaar", "YSL",
  "Hermès", "Valentino", "Guerlain", "Tom Ford", "Elle", "La Perla",
  "Cartier", "Prada", "Givenchy", "Bulgari",
];

const magazines = [
  "Vogue Paris", "Harper's Bazaar", "Elle France", "L'Officiel",
  "Numéro", "Marie Claire", "Vanity Fair", "W Magazine",
];

export default function Clients() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-site">
        <ScrollReveal>
          <h6 className="mb-3 text-center">Ils nous font confiance</h6>
        </ScrollReveal>

        {/* Logo marquee */}
        <div className="mt-8 sm:mt-10 relative overflow-hidden py-6 sm:py-8">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background-secondary to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background-secondary to-transparent" />

          <div className="flex animate-marquee items-center gap-12 sm:gap-16 md:gap-20">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-foreground/25 text-sm sm:text-base font-medium tracking-[0.1em] uppercase select-none whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Magazines row */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-border">
            <h6 className="mb-6 text-center">Publications</h6>
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-4">
              {magazines.map((mag) => (
                <span
                  key={mag}
                  className="text-foreground/20 text-sm sm:text-base font-medium tracking-[0.05em] whitespace-nowrap"
                >
                  {mag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
