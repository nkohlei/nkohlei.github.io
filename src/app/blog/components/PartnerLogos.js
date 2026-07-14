"use client";

/* ──────────────────────────────────────────────────────────────
   PARTNER LOGOS
   11 institutions — monochrome by default, coloured on hover.
   Inline SVG text logos — no external images needed.
   Click → opens partner site in new tab.
────────────────────────────────────────────────────────────── */

const PARTNERS = [
  {
    id: "nasa",
    name: "NASA",
    color: "#0B3D91",
    url: "https://www.nasa.gov",
    subtitle: "Space Agency",
  },
  {
    id: "esa",
    name: "ESA",
    color: "#003591",
    url: "https://www.esa.int",
    subtitle: "Eur. Space Agency",
  },
  {
    id: "spacex",
    name: "SpaceX",
    color: "#005288",
    url: "https://www.spacex.com",
    subtitle: "Space Exploration",
  },
  {
    id: "cern",
    name: "CERN",
    color: "#0033A0",
    url: "https://home.cern",
    subtitle: "Particle Physics",
  },
  {
    id: "natgeo",
    name: "NAT GEO",
    color: "#FFCC00",
    url: "https://www.nationalgeographic.com",
    subtitle: "Nat. Geographic",
  },
  {
    id: "patagonia",
    name: "Patagonia",
    color: "#1B5E20",
    url: "https://www.patagonia.com",
    subtitle: "Outdoor Gear",
  },
  {
    id: "arcteryx",
    name: "Arc'teryx",
    color: "#1A1A1A",
    url: "https://www.arcteryx.com",
    subtitle: "Alpine Equipment",
  },
  {
    id: "redbull",
    name: "Red Bull",
    color: "#CC1E2B",
    url: "https://www.redbull.com",
    subtitle: "Extreme Sports",
  },
  {
    id: "gopro",
    name: "GoPro",
    color: "#00ADEF",
    url: "https://gopro.com",
    subtitle: "Action Cameras",
  },
  {
    id: "garmin",
    name: "Garmin",
    color: "#007DC6",
    url: "https://www.garmin.com",
    subtitle: "Navigation & GPS",
  },
  {
    id: "nasajpl",
    name: "NASA JPL",
    color: "#C0272D",
    url: "https://www.jpl.nasa.gov",
    subtitle: "Jet Propulsion Lab",
  },
];

function PartnerLogo({ partner, lang }) {
  const handleHover = (e, enter) => {
    const el = e.currentTarget;
    if (enter) {
      el.style.color = partner.color;
      el.style.borderColor = `${partner.color}30`;
      el.style.background = `${partner.color}08`;
    } else {
      el.style.color = "";
      el.style.borderColor = "";
      el.style.background = "";
    }
  };

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo"
      id={`partner-${partner.id}`}
      aria-label={`${partner.name} — ${partner.subtitle}`}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      <span className="block font-black" style={{ fontSize: "11px", letterSpacing: "0.04em" }}>
        {partner.name}
      </span>
    </a>
  );
}

export default function PartnerLogos({ lang = "tr" }) {
  const heading = lang === "en" ? "Partners & References" : "Ortaklar & Referanslar";
  const sub     = lang === "en"
    ? "Organizations that define the frontier of science and exploration"
    : "Bilim ve keşfin sınırlarını belirleyen kuruluşlar";

  return (
    <section
      style={{
        paddingTop: "64px", paddingBottom: "64px",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            className="font-mono text-[10px] uppercase tracking-widest mb-2"
            style={{ color: "var(--foreground-muted)" }}
          >
            {heading}
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-subtle)" }}>{sub}</p>
        </div>

        {/* Logo grid */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {PARTNERS.map((p) => (
            <PartnerLogo key={p.id} partner={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
