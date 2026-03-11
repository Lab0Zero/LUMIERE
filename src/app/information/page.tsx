"use client";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InformationPage() {
  return (
    <div className="g-pad" style={{ paddingTop: 58 }}>
      {/* Hero text + culture image */}
      <div className="grid-12" style={{ marginBottom: 60 }}>
        <div style={{ gridColumn: "1 / 7" }}>
          <ScrollReveal type="fadeUp">
            <p className="info-hero-text">
              Lumière Productions has been a leading full-service photo and film
              production agency in Paris for over 15 years. We have established a
              strong reputation for delivering seamless international productions
              with expert creative insight.
            </p>
          </ScrollReveal>
        </div>
        <div style={{ gridColumn: "8 / 10" }}>
          <ScrollReveal type="clipUp" delay={0.2}>
            <div
              style={{
                aspectRatio: "3/4",
                background: "#3D4A5C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>Culture</span>
            </div>
          </ScrollReveal>
        </div>
        <div style={{ gridColumn: "10 / 12", display: "flex", alignItems: "flex-end" }}>
          <ScrollReveal type="fadeUp" delay={0.3}>
            <a href="/culture" className="info-link" style={{ color: "var(--color-gray)" }}>
              (View Culture)
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Info sections */}
      <div className="grid-12" style={{ paddingBottom: 40 }}>
        {/* About */}
        <div style={{ gridColumn: "1 / 5" }}>
          <ScrollReveal type="fadeUp">
            <p className="info-title">About</p>
            <p className="info-body" style={{ marginBottom: 16 }}>
              Led by a dynamic and well-connected team, known for their creative energy and
              unparalleled ability to secure the best locations, talent, and rates, our team brings
              extensive industry knowledge and a steadfast commitment to each project.
            </p>
            <p className="info-body" style={{ marginBottom: 32 }}>
              Our dedicated production team manages every aspect of the process, from initial
              concept to final execution, ensuring a seamless and world-class experience. With
              access to top-tier local crew, trusted suppliers, and the finest locations Paris has
              to offer, we consistently deliver productions that surpass expectations.
            </p>

            <p className="info-title" style={{ marginTop: 32 }}>Office</p>
            <p className="info-body">
              18 Rue du Faubourg Saint-Honoré,<br />
              75008 Paris, France
            </p>
          </ScrollReveal>
        </div>

        {/* Contact + Services */}
        <div style={{ gridColumn: "8 / 10" }}>
          <ScrollReveal type="fadeUp" delay={0.15}>
            <p className="info-title">Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <a href="mailto:contact@lumiere-productions.com" className="info-link">
                contact@lumiere-productions.com
              </a>
              <a href="https://instagram.com" className="info-link">Instagram</a>
              <a href="https://linkedin.com" className="info-link">LinkedIn</a>
              <span className="info-body">+33 1 42 86 00 00</span>
            </div>

            <p className="info-title" style={{ marginTop: 32 }}>Services</p>
            <div className="info-body" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span>Film production</span>
              <span>Stills photography</span>
              <span>Fashion campaigns</span>
              <span>Beauty shoots</span>
              <span>Editorial shoots</span>
              <span>Advertising campaigns</span>
              <span>Lookbooks</span>
              <span>Casting &amp; talent management</span>
              <span>Location scouting</span>
              <span>Post-production</span>
              <span>Creative direction</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Selected Clients */}
        <div style={{ gridColumn: "11 / 13" }}>
          <ScrollReveal type="fadeUp" delay={0.25}>
            <p className="info-title">Selected Clients</p>
            <div className="info-body" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                "Maison Aurore", "Noire Beauté", "Atelier Ciel", "Maison Sellier", "Flamme Rouge",
                "Rouge Absolu", "Essence Dorée", "Noir Velours", "Maison Clarté", "Ombre Pourpre",
                "Haute Éclipse", "Lumière Noire", "Voile de Soie", "Revue Éphémère",
                "Gazette Moderne", "Elle Rebelle", "L'Officiel", "Numéro",
                "Marie Claire", "Vanity Fair", "W Magazine",
              ].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
