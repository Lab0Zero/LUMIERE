"use client";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal type="fadeUp">
      <footer className="site-footer">
        <span style={{ gridColumn: "1 / 4" }}>
          &copy; {new Date().getFullYear()} Lumi&egrave;re Productions
        </span>
        <span style={{ gridColumn: "8 / 9" }}>
          <Link href="#">Privacy Policy</Link>
        </span>
        <span style={{ gridColumn: "9 / 10" }}>
          <Link href="#">Cookie Policy</Link>
        </span>
        <span style={{ gridColumn: "12 / 13", textAlign: "right" }}>
          Site by Lumi&egrave;re
        </span>
      </footer>
    </ScrollReveal>
  );
}
