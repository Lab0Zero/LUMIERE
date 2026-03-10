"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none" }}
      >
        <div className="container-site flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-0">
            <span
              className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                mobileOpen ? "text-white" : "text-foreground"
              }`}
            >
              Lumière
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-normal tracking-[0.05em] text-foreground-secondary
                           hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="text-[13px] font-normal tracking-[0.05em] text-foreground-secondary
                         hover:text-foreground transition-colors duration-300"
            >
              Collaborer
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex lg:hidden items-center justify-center w-11 h-11"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block h-[1px] w-6 rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[4px] bg-white" : "bg-foreground"
                }`}
              />
              <span
                className={`block h-[1px] w-6 rounded-full transition-all duration-300 mt-[7px] ${
                  mobileOpen ? "-rotate-45 -translate-y-[4px] bg-white" : "bg-foreground"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu fullscreen — dark overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] lg:hidden"
          >
            <nav className="flex flex-col items-start justify-center h-full px-8 gap-6">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl sm:text-4xl font-light text-white tracking-tight"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10 w-full"
              >
                <p className="text-sm text-white/40 tracking-wide">
                  contact@lumiere-agency.com
                </p>
                <p className="text-sm text-white/40 tracking-wide mt-1">
                  +33 1 42 86 00 00
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
