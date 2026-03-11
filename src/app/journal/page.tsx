import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    slug: "behind-the-lens-dior",
    title: "Behind the Lens: Our Dior Haute Couture Campaign",
    date: "February 15, 2026",
    cover: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?w=800&q=80",
  },
  {
    slug: "paris-fashion-week",
    title: "Paris Fashion Week 2026 — A Season of Contrasts",
    date: "January 28, 2026",
    cover: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    slug: "studio-tour",
    title: "A Look Inside Our Paris Studio",
    date: "December 12, 2025",
    cover: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
  },
  {
    slug: "location-scouting-morocco",
    title: "Location Scouting: The Colors of Morocco",
    date: "November 5, 2025",
    cover: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
  },
  {
    slug: "working-with-natural-light",
    title: "Working with Natural Light in Fashion Photography",
    date: "October 18, 2025",
    cover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  },
  {
    slug: "beauty-editorial-trends",
    title: "Beauty Editorial Trends for 2026",
    date: "September 22, 2025",
    cover: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80",
  },
];

export default function JournalPage() {
  return (
    <div className="g-pad" style={{ paddingTop: 58 }}>
      {/* Filter row */}
      <div className="grid-12 journal-filter-row" style={{ marginBottom: 24 }}>
        <div style={{ gridColumn: "8 / 10" }}>
          <span style={{ fontSize: 10, fontWeight: 500, cursor: "pointer" }}>
            &#9660; All
          </span>
        </div>
      </div>

      {/* Articles — uses journal-grid which switches from 12-col to 1-col on mobile */}
      <div className="journal-grid">
        {articles.map((a) => (
          <Link key={a.slug} href="#" className="journal-item">
            <div className="journal-img">
              <Image
                src={a.cover}
                alt={a.title}
                fill
                sizes="(max-width: 768px) 100vw, 16vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="journal-meta">
              <span style={{ color: "var(--color-gray)" }}>{a.date}</span>
              <p style={{ marginTop: 4, fontWeight: 500 }}>{a.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
