"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Stills", href: "/" },
  { label: "Motion", href: "/motion" },
  { label: "Culture", href: "/culture" },
  { label: "Information", href: "/information" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isStills = pathname === "/" || pathname.startsWith("/stills");
  const activeHref = isStills ? "/" : pathname;
  const showViewToggle = isStills;

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
      <nav className="nav-root nav-desktop">
        <Link href="/" className="nav-logo" style={{ gridColumn: "1 / 3" }}>
          <span className="nav-logo-short">LP</span>
          <span className="nav-logo-full">Lumière Productions</span>
        </Link>

        <div style={{ gridColumn: "3 / 5", display: "flex", gap: "8px" }}>
          {showViewToggle ? <ViewToggle /> : (
            pathname === "/motion" && (
              <Link href="/motion" className="nav-active">Index</Link>
            )
          )}
        </div>

        <div className="nav-links" style={{ gridColumn: "8 / -1" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={activeHref === l.href ? "nav-active" : "nav-inactive"}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="nav-root nav-mobile">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-short">LP</span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="nav-mobile-overlay">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={activeHref === l.href ? "nav-mobile-active" : ""}
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
        className={view === "list" ? "nav-active" : "nav-inactive"}
      >
        List
      </button>
      <button
        onClick={() => toggle("grid")}
        className={view === "grid" ? "nav-active" : "nav-inactive"}
      >
        Grid
      </button>
    </>
  );
}
