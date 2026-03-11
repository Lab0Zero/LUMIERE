import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span style={{ gridColumn: "1 / 4" }}>
        &copy; {new Date().getFullYear()} Lumi&egrave;re Productions
      </span>
      <span style={{ gridColumn: "7 / 9" }}>
        <Link href="#">Privacy Policy</Link>
      </span>
      <span style={{ gridColumn: "9 / 11" }}>
        <Link href="#">Cookie Policy</Link>
      </span>
      <span style={{ gridColumn: "11 / 13", textAlign: "right" }}>
        Site by Lumi&egrave;re
      </span>
    </footer>
  );
}
