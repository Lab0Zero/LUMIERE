"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const motionProjects = [
  {
    slug: "dior-sauvage",
    title: "Dior Sauvage",
    client: "Dior",
    cover: "https://images.unsplash.com/photo-1638337935003-e17cf483ca8d?w=1200&q=85",
  },
  {
    slug: "chanel-chance",
    title: "Chanel Chance",
    client: "Chanel",
    cover: "https://images.unsplash.com/photo-1661768065574-c2a463343342?w=1200&q=85",
  },
  {
    slug: "valentino-rosso",
    title: "Valentino Rosso",
    client: "Valentino",
    cover: "https://images.unsplash.com/photo-1508829298730-713792c22189?w=1200&q=85",
  },
  {
    slug: "guerlain-shalimar",
    title: "Guerlain Shalimar",
    client: "Guerlain",
    cover: "https://images.unsplash.com/photo-1730320915228-f70e3c43aa7d?w=1200&q=85",
  },
  {
    slug: "ysl-libre",
    title: "YSL Libre",
    client: "YSL",
    cover: "https://images.unsplash.com/photo-1767570278483-328dfeccef89?w=1200&q=85",
  },
  {
    slug: "hermes-terre",
    title: "Hermès Terre",
    client: "Hermès",
    cover: "https://images.unsplash.com/photo-1739001414891-461488e9e91e?w=1200&q=85",
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
