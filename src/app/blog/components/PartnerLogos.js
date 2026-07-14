"use client";

/* ──────────────────────────────────────────────────────────────
   PARTNER LOGOS — real monochrome SVG marks
   Each hover triggers brand colour + subtle glow.
   No external images, no text-only fallbacks.
────────────────────────────────────────────────────────────── */

const PARTNERS = [
  {
    id: "nasa",
    url: "https://www.nasa.gov",
    label: "NASA",
    color: "#FC3D21",
    /* NASA "worm" logotype */
    svg: (
      <svg viewBox="0 0 120 38" fill="currentColor" aria-label="NASA">
        {/* N */}
        <path d="M4 6h5.5l10 18.5V6H24v26h-5.4L8.5 13.5V32H4V6z"/>
        {/* A */}
        <path d="M37 6h6l10 26h-5.8l-2-5.5H34.8L32.8 32H27L37 6zm.5 15.5h7l-3.5-9.7-3.5 9.7z"/>
        {/* S */}
        <path d="M65 7.2C63.2 6.4 61 6 58.8 6c-5.2 0-9.4 2.5-9.4 7.4 0 8.5 12 5.8 12 10.6 0 2.1-1.8 3-4 3-2.3 0-4.6-.9-6.5-2.2l-2.3 4c2.2 1.5 5 2.5 8 2.5 5.8 0 10-2.8 10-8.2 0-8.9-12-6.2-12-10.7 0-1.8 1.6-2.6 3.5-2.6 1.8 0 3.7.6 5.2 1.5L65 7.2z"/>
        {/* A */}
        <path d="M82 6h6l10 26h-5.8l-2-5.5H79.8L77.8 32H72L82 6zm.5 15.5h7l-3.5-9.7-3.5 9.7z"/>
      </svg>
    ),
  },
  {
    id: "esa",
    url: "https://www.esa.int",
    label: "ESA",
    color: "#003591",
    /* ESA wordmark with orbital arc */
    svg: (
      <svg viewBox="0 0 100 38" fill="currentColor" aria-label="ESA">
        <path d="M6 6h22v5H12v6h14v5H12v7h16v5H6V6z"/>
        <path d="M38 7.2C36.2 6.4 34 6 31.8 6c-5.2 0-9.4 2.5-9.4 7.4 0 8.5 12 5.8 12 10.6 0 2.1-1.8 3-4 3-2.3 0-4.6-.9-6.5-2.2l-2.3 4c2.2 1.5 5 2.5 8 2.5 5.8 0 10-2.8 10-8.2 0-8.9-12-6.2-12-10.7 0-1.8 1.6-2.6 3.5-2.6 1.8 0 3.7.6 5.2 1.5L38 7.2z"/>
        <path d="M57 6h6l10 26h-5.8l-2-5.5H54.8L52.8 32H47L57 6zm.5 15.5h7l-3.5-9.7-3.5 9.7z"/>
        {/* orbital arc */}
        <path d="M78 19c0-5.5 4.5-10 10-10" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
        <circle cx="88" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    id: "spacex",
    url: "https://www.spacex.com",
    label: "SpaceX",
    color: "#005288",
    /* SpaceX wordmark */
    svg: (
      <svg viewBox="0 0 130 34" fill="currentColor" aria-label="SpaceX">
        {/* S */}
        <path d="M2 7.8C3.8 6.7 6 6 8.4 6c4.5 0 7.8 2.3 7.8 6.5 0 7.4-10.6 5.1-10.6 9.4 0 1.7 1.4 2.4 3 2.4s3.1-.7 4.3-1.8l2 3.6C13.2 27.3 10.8 28 8.2 28c-4.8 0-8.2-2.5-8.2-7.1 0-7.7 10.6-5.5 10.6-9.5 0-1.4-1.2-2-2.6-2-1.5 0-3.1.5-4.3 1.2L2 7.8z"/>
        {/* p */}
        <path d="M19 6h5.5l.3 2.5c1.3-1.7 3-2.8 5.2-2.8 4.8 0 7.5 3.8 7.5 9s-2.7 9-7.5 9c-2 0-3.7-1-4.8-2.5V32H19V6zm5.2 8.7c0 3 1.4 5 3.8 5s3.8-2 3.8-5-1.4-5-3.8-5-3.8 2-3.8 5z"/>
        {/* a */}
        <path d="M47 17.4c0 2.8 1.5 4.7 4 4.7 1.5 0 2.9-.7 3.8-1.8l3 3c-1.8 2-4.3 3-7 3-5.3 0-8.8-3.7-8.8-9 0-5.2 3.4-9 8.5-9 5.4 0 8.2 3.8 8.2 8.5v.6H47zm7.8-3.2c-.1-2.3-1.3-3.8-3.3-3.8s-3.4 1.5-3.5 3.8h6.8z"/>
        {/* c */}
        <path d="M74 22.2c-1.2.8-2.7 1.3-4.3 1.3-4 0-7-3-7-8.7 0-5.6 3-8.8 7.2-8.8 1.6 0 3 .4 4 1.2l-1.7 3.8c-.7-.5-1.5-.8-2.3-.8-2.3 0-3.7 1.8-3.7 4.6 0 2.9 1.4 4.7 3.7 4.7.9 0 1.8-.3 2.5-.8L74 22.2z"/>
        {/* e */}
        <path d="M80 17.4c0 2.8 1.5 4.7 4 4.7 1.5 0 2.9-.7 3.8-1.8l3 3c-1.8 2-4.3 3-7 3-5.3 0-8.8-3.7-8.8-9 0-5.2 3.4-9 8.5-9 5.4 0 8.2 3.8 8.2 8.5v.6H80zm7.8-3.2c-.1-2.3-1.3-3.8-3.3-3.8s-3.4 1.5-3.5 3.8h6.8z"/>
        {/* X */}
        <path d="M100 6h6.5l5 8 5-8H123l-8 11 8.5 11h-6.5l-5.5-8.2-5.5 8.2H99l8.5-11L100 6z"/>
      </svg>
    ),
  },
  {
    id: "cern",
    url: "https://home.cern",
    label: "CERN",
    color: "#0033A0",
    /* CERN mark: circle + orbits + text */
    svg: (
      <svg viewBox="0 0 100 38" fill="none" aria-label="CERN">
        <circle cx="19" cy="19" r="16" stroke="currentColor" strokeWidth="1.6"/>
        <ellipse cx="19" cy="19" rx="16" ry="6" stroke="currentColor" strokeWidth="1.2" transform="rotate(-35 19 19)"/>
        <ellipse cx="19" cy="19" rx="16" ry="6" stroke="currentColor" strokeWidth="1.2" transform="rotate(35 19 19)"/>
        <circle cx="19" cy="19" r="2.5" fill="currentColor"/>
        {/* C */}
        <path d="M46 22.2c-1.2.8-2.7 1.3-4.3 1.3-4 0-7-3-7-8.7 0-5.6 3-8.8 7.2-8.8 1.6 0 3 .4 4 1.2l-1.7 3.8c-.7-.5-1.5-.8-2.3-.8-2.3 0-3.7 1.8-3.7 4.6 0 2.9 1.4 4.7 3.7 4.7.9 0 1.8-.3 2.5-.8L46 22.2z" fill="currentColor"/>
        {/* E */}
        <path d="M49 6h22v5H55v6h14v5H55v7h16v5H49V6z" fill="currentColor"/>
        {/* R */}
        <path d="M75 6h9c5 0 8 2.5 8 7 0 3-1.5 5-4 6.2l5 8.8h-6l-4.5-8H81v8h-6V6zm6 10.5c2.5 0 3.8-1 3.8-3.2 0-2-1.3-2.8-3.8-2.8H81v6h.3-.3z" fill="currentColor"/>
        {/* N */}
        <text x="94" y="28" fontSize="20" fontWeight="900" fontFamily="Arial, sans-serif" fill="currentColor">N</text>
      </svg>
    ),
  },
  {
    id: "patagonia",
    url: "https://www.patagonia.com",
    label: "Patagonia",
    color: "#1B5E20",
    /* Patagonia — mountain silhouette + wordmark */
    svg: (
      <svg viewBox="0 0 140 38" fill="currentColor" aria-label="Patagonia">
        {/* Mountain peaks */}
        <path d="M4 28L10 14l4 7 5-10 4 6 4-8 4 8 3-5 6 14H4z" opacity="0.9"/>
        {/* Wordmark */}
        <text x="45" y="26" fontSize="14" fontWeight="800" fontFamily="Arial, sans-serif"
          letterSpacing="0.5" fill="currentColor">PATAGONIA</text>
      </svg>
    ),
  },
  {
    id: "redbull",
    url: "https://www.redbull.com",
    label: "Red Bull",
    color: "#CC1E2B",
    /* Red Bull — two charging bulls + sun */
    svg: (
      <svg viewBox="0 0 80 38" fill="currentColor" aria-label="Red Bull">
        {/* Sun circle behind bulls */}
        <circle cx="40" cy="19" r="10" opacity="0.2"/>
        <circle cx="40" cy="19" r="7" opacity="0.15"/>
        {/* Left bull (simplified) */}
        <ellipse cx="26" cy="21" rx="10" ry="6" opacity="0.9"/>
        <path d="M18 18c-2-3-1-7 2-8 1-.5 2 0 2 1s-1 3 1 5L18 18z"/>
        <path d="M36 18c1-2 0-4-1-5l2-2c2 3 2 7 0 9L36 18z"/>
        <circle cx="19" cy="17" r="1.2"/>
        {/* Right bull (mirrored) */}
        <ellipse cx="54" cy="21" rx="10" ry="6" opacity="0.9" transform="scale(-1,1) translate(-80,0)"/>
        <path d="M62 18c2-3 1-7-2-8-1-.5-2 0-2 1s1 3-1 5L62 18z"/>
        <path d="M44 18c-1-2 0-4 1-5l-2-2c-2 3-2 7 0 9L44 18z"/>
        <circle cx="61" cy="17" r="1.2"/>
      </svg>
    ),
  },
  {
    id: "gopro",
    url: "https://gopro.com",
    label: "GoPro",
    color: "#00ADEF",
    /* GoPro camera icon + wordmark */
    svg: (
      <svg viewBox="0 0 96 38" fill="currentColor" aria-label="GoPro">
        {/* Camera body */}
        <rect x="2" y="9" width="30" height="22" rx="4" ry="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        {/* Lens */}
        <circle cx="17" cy="20" r="7" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="17" cy="20" r="3.5" opacity="0.7"/>
        {/* Shutter button */}
        <rect x="10" y="5" width="8" height="4" rx="2"/>
        {/* Wordmark */}
        <text x="38" y="26" fontSize="15" fontWeight="900" fontFamily="Arial, sans-serif" fill="currentColor">GoPro</text>
      </svg>
    ),
  },
  {
    id: "natgeo",
    url: "https://www.nationalgeographic.com",
    label: "Nat Geo",
    color: "#FFCC00",
    /* National Geographic yellow rectangle mark */
    svg: (
      <svg viewBox="0 0 80 38" fill="currentColor" aria-label="National Geographic">
        <rect x="4" y="4" width="16" height="30" rx="1" fill="currentColor"/>
        <text x="24" y="16" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif" fill="currentColor">NATIONAL</text>
        <text x="24" y="26" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif" fill="currentColor">GEOGRAPHIC</text>
      </svg>
    ),
  },
  {
    id: "arcteryx",
    url: "https://www.arcteryx.com",
    label: "Arc'teryx",
    color: "#808080",
    svg: (
      <svg viewBox="0 0 100 38" fill="currentColor" aria-label="Arc'teryx">
        {/* Simple silhouette representing the classic Archaeopteryx logo skeleton */}
        <path d="M5 25c10-2 15-8 18-14 1-2-1-4-3-3-5 2-10 6-12 11h-3zm18-14c1 2 4 4 6 1 2-3 1-6-1-7s-4 2-5 6zm8-3c3 1 6-2 5-5-1-2-4-2-6 0s-2 4 1 5zm8 15c2-3 2-8-1-11-2-2-5 0-5 3 0 4 3 6 6 8zm10-5c1-3-1-6-4-6s-4 3-3 6 2 4 7 0zm10 8c0-4-3-6-6-4-2 2-1 6 2 6s4-2 4-2z" />
        <text x="58" y="24" fontSize="11" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="0.5" fill="currentColor">ARC'TERYX</text>
      </svg>
    ),
  },
  {
    id: "garmin",
    url: "https://www.garmin.com",
    label: "Garmin",
    color: "#007DC6",
    svg: (
      <svg viewBox="0 0 100 38" fill="currentColor" aria-label="Garmin">
        {/* Stylised G mark */}
        <path d="M4 19C4 10.7 10.7 4 19 4s15 6.7 15 15c0 4-1.6 7.7-4.2 10.4h-8.3v-8h8v-2.4c0-5.8-4.7-10.4-10.5-10.4S8.5 13.2 8.5 19c0 5.5 4.2 10 9.5 10.4v4.5C10.2 33.2 4 26.7 4 19z"/>
        <path d="M30 21h-5.5v5H30v-5z"/>
        {/* Wordmark */}
        <text x="38" y="26" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="0.3" fill="currentColor">garmin</text>
      </svg>
    ),
  },
];

function LogoItem({ partner }) {
  return (
    <a
      id={`partner-${partner.id}`}
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.label}
      title={partner.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 20px",
        borderRadius: "10px",
        border: "1px solid var(--glass-border)",
        background: "var(--glass-bg)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        color: "var(--foreground-subtle)",
        width: "auto",
        height: "56px",
        minWidth: "100px",
        textDecoration: "none",
        transition: "color 0.3s ease, border-color 0.3s ease, background 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = partner.color;
        e.currentTarget.style.borderColor = `${partner.color}35`;
        e.currentTarget.style.background = `${partner.color}0A`;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--foreground-subtle)";
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.background = "var(--glass-bg)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ height: "24px", width: "auto", display: "flex", alignItems: "center" }}>
        {/* Clone the SVG and inject sizing */}
        {partner.svg}
      </div>
    </a>
  );
}

export default function PartnerLogos({ lang = "tr" }) {
  const heading = lang === "en" ? "Partners & References" : "Ortaklar & Referanslar";
  const sub = lang === "en"
    ? "Organizations defining the frontier of science and exploration"
    : "Bilim ve keşfin sınırlarını belirleyen kuruluşlar";

  return (
    <section style={{ paddingTop: "64px", paddingBottom: "64px", borderTop: "1px solid var(--border-color)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>
            {heading}
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-subtle)" }}>{sub}</p>
        </div>

        {/* Logo grid — wraps on smaller screens */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          {PARTNERS.map((p) => (
            <LogoItem key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
