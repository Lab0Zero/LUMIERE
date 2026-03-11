import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lumière Productions",
  description: "Agence de production photo haut de gamme — Mode, Beauté, Éditorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}
