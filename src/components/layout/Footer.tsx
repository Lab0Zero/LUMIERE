import Link from "next/link";

const footerLinks = {
  Portfolio: [
    { label: "Fashion", href: "#portfolio" },
    { label: "Beauty", href: "#portfolio" },
    { label: "Editorial", href: "#portfolio" },
    { label: "Campaign", href: "#portfolio" },
  ],
  Agence: [
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Photographes", href: "#" },
    { label: "Mannequins", href: "#" },
  ],
  Contact: [
    { label: "Collaborer", href: "#contact" },
    { label: "Carrières", href: "#" },
    { label: "Journal", href: "#journal" },
    { label: "Presse", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-site py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:gap-10 grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-medium tracking-[0.2em] uppercase">Lumière</p>
            <p className="mt-3 text-sm text-foreground-secondary leading-relaxed max-w-[240px]">
              Agence photo haut de gamme.<br />Paris, France.
            </p>
          </div>
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-foreground mb-4">{cat}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground-secondary hover:text-foreground transition-colors inline-block py-0.5"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-border
                        flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-tertiary text-center sm:text-left">
            &copy; {new Date().getFullYear()} Lumière Photo Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-foreground-tertiary hover:text-foreground transition-colors py-1">
              Mentions légales
            </Link>
            <Link href="#" className="text-xs text-foreground-tertiary hover:text-foreground transition-colors py-1">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
