"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Stills", href: "/" },
  { label: "Motion", href: "/motion" },
  { label: "Culture", href: "/culture" },
  { label: "Information", href: "/information" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 769) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <nav className="nav-root hidden md:grid">
        <Link href="/" style={{ gridColumn: "1 / 3" }}>
          LP
        </Link>
        <div style={{ gridColumn: "3 / 5", display: "flex", gap: "8px" }}>
          <ViewToggle />
        </div>
        <div style={{ gridColumn: "7 / 13", display: "flex", justifyContent: "space-between" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav
        className="nav-root grid md:hidden"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        <Link href="/">LP</Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 997,
            background: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 12px",
            gap: "24px",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "24px", fontWeight: 500 }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function ViewToggle() {
  const [view, setView] = useState<"list" | "grid">("list");

  const toggle = (mode: "list" | "grid") => {
    setView(mode);
    window.dispatchEvent(new CustomEvent("viewchange", { detail: mode }));
  };

  return (
    <>
      <button
        onClick={() => toggle("list")}
        style={{ opacity: view === "list" ? 1 : 0.4 }}
      >
        List
      </button>
      <button
        onClick={() => toggle("grid")}
        style={{ opacity: view === "grid" ? 1 : 0.4 }}
      >
        Grid
      </button>
    </>
  );
}
