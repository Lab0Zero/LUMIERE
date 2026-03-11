import Image from "next/image";
import Link from "next/link";

const motionProjects = [
  {
    slug: "dior-sauvage",
    title: "Dior Sauvage",
    client: "Dior",
    cover: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1024&q=80",
  },
  {
    slug: "chanel-chance",
    title: "Chanel Chance",
    client: "Chanel",
    cover: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=1024&q=80",
  },
  {
    slug: "valentino-rosso",
    title: "Valentino Rosso",
    client: "Valentino",
    cover: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1024&q=80",
  },
  {
    slug: "guerlain-shalimar",
    title: "Guerlain Shalimar",
    client: "Guerlain",
    cover: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1024&q=80",
  },
  {
    slug: "ysl-libre",
    title: "YSL Libre",
    client: "YSL",
    cover: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1024&q=80",
  },
  {
    slug: "hermes-terre",
    title: "Hermès Terre",
    client: "Hermès",
    cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1024&q=80",
  },
];

export default function MotionPage() {
  return (
    <div style={{ paddingTop: 58 }}>
      <div className="motion-grid">
        {motionProjects.map((p) => (
          <Link key={p.slug} href="#" className="motion-item">
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
        ))}
      </div>
    </div>
  );
}
