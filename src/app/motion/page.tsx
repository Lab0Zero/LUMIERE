"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const motionProjects = [
  {
    slug: "dior-sauvage",
    title: "Dior Sauvage",
    client: "Dior",
    cover: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=1200&q=85",
  },
  {
    slug: "chanel-chance",
    title: "Chanel Chance",
    client: "Chanel",
    cover: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=1200&q=85",
  },
  {
    slug: "valentino-rosso",
    title: "Valentino Rosso",
    client: "Valentino",
    cover: "https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=1200&q=85",
  },
  {
    slug: "guerlain-shalimar",
    title: "Guerlain Shalimar",
    client: "Guerlain",
    cover: "https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=1200&q=85",
  },
  {
    slug: "ysl-libre",
    title: "YSL Libre",
    client: "YSL",
    cover: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=85",
  },
  {
    slug: "hermes-terre",
    title: "Hermès Terre",
    client: "Hermès",
    cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=85",
  },
];

export default function MotionPage() {
  return (
    <div style={{ paddingTop: 58 }}>
      <div className="motion-grid">
        {motionProjects.map((p, i) => (
          <ScrollReveal key={p.slug} type="clipUp" delay={i * 0.1}>
            <Link href="#" className="motion-item">
              <div className="motion-thumb">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="motion-overlay">
                  <span className="motion-play">&#9654;</span>
                </div>
              </div>
              <div className="motion-label">
                <span style={{ color: "var(--color-gray)" }}>{p.client}</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
