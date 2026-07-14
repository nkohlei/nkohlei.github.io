"use client";

/*
  PARTNER LOGOS — Authentic Wordmarks
  ─────────────────────────────────────
  Strategy:
  • True wordmarks from simple-icons CDN  →  <img dark:invert>
  • Icon-only CDN logos                   →  icon + styled label
  • Google / NatGeo / Tesla / Space.com   →  custom inline SVG
  • Oxypace                               →  website image pair
*/

const SI = (slug) => `https://cdn.simpleicons.org/${slug}/000000`;

/* ── INLINE SVG WORDMARKS ─────────────────────────────────────── */

const GoogleWordmark = () => (
  <svg viewBox="0 0 272 92" className="h-7 w-auto" aria-label="Google">
    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
  </svg>
);

const NatGeoWordmark = () => (
  <svg viewBox="0 0 260 52" className="h-8 w-auto" aria-label="National Geographic">
    <rect x="0" y="4" width="28" height="44" fill="#FFCC00"/>
    <text x="36" y="22" fontFamily="'Arial', Helvetica, sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.8" fill="currentColor">NATIONAL</text>
    <text x="36" y="40" fontFamily="'Arial', Helvetica, sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.8" fill="currentColor">GEOGRAPHIC</text>
  </svg>
);

const SpaceComWordmark = () => (
  <svg viewBox="0 0 200 42" className="h-7 w-auto" aria-label="Space.com">
    <text x="0" y="34" fontFamily="'Arial Black','Arial Bold',sans-serif" fontWeight="900" fontSize="38" letterSpacing="-1.5" fill="currentColor">SPACE</text>
    <text x="138" y="29" fontFamily="'Arial',sans-serif" fontWeight="700" fontSize="17" fill="currentColor">.com</text>
  </svg>
);

const TeslaWordmark = () => (
  <svg viewBox="0 0 150 58" className="h-8 w-auto" aria-label="Tesla">
    {/* Tesla T symbol */}
    <path d="M48 6 L102 6 L102 14 Q75 8 75 8 Q75 8 48 14 Z" fill="currentColor"/>
    <path d="M75 8 L75 38 Q75 8 75 8" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round"/>
    <path d="M75 12 L75 38" stroke="currentColor" strokeWidth="7" fill="currentColor"/>
    {/* TESLA text */}
    <text x="75" y="55" fontFamily="'Arial',Helvetica,sans-serif" fontWeight="700" fontSize="12" letterSpacing="5" textAnchor="middle" fill="currentColor">TESLA</text>
  </svg>
);

const MITWordmark = () => (
  <svg viewBox="0 0 200 52" className="h-8 w-auto" aria-label="MIT">
    <text x="0" y="38" fontFamily="'Arial Black','Arial Bold',sans-serif" fontWeight="900" fontSize="48" fill="currentColor">MIT</text>
  </svg>
);

/* ── LOGO DEFINITIONS ─────────────────────────────────────────── */

const PARTNERS = [
  /* 1 */
  {
    id: "oxypace", url: "https://oxypace.com.tr", label: "Oxypace",
    render: () => (
      <span className="inline-flex items-center gap-1.5">
        <img src="https://oxypace.com.tr/logo.png" alt="" aria-hidden className="h-8 w-auto object-contain opacity-100"/>
        <img src="https://oxypace.com.tr/oxypace-text-logo2.webp" alt="oxypace" className="h-4 w-auto object-contain dark:invert opacity-100"/>
      </span>
    ),
  },
  /* 2 – NASA worm logo IS the wordmark */
  {
    id: "nasa", url: "https://www.nasa.gov", label: "NASA",
    render: () => <img src={SI("nasa")} alt="NASA" className="h-8 w-auto object-contain dark:invert"/>,
  },
  /* 3 – SpaceX wordmark */
  {
    id: "spacex", url: "https://www.spacex.com", label: "SpaceX",
    render: () => <img src={SI("spacex")} alt="SpaceX" className="h-6 w-auto object-contain dark:invert"/>,
  },
  /* 4 – CERN */
  {
    id: "cern", url: "https://home.cern", label: "CERN",
    render: () => <img src={SI("cern")} alt="CERN" className="h-8 w-auto object-contain dark:invert"/>,
  },
  /* 5 – Space.com */
  {
    id: "spacecom", url: "https://www.space.com", label: "Space.com",
    render: () => <SpaceComWordmark/>,
  },
  /* 6 – National Geographic */
  {
    id: "natgeo", url: "https://www.nationalgeographic.com", label: "National Geographic",
    render: () => <NatGeoWordmark/>,
  },
  /* 7 – The North Face: icon + stacked text */
  {
    id: "tnf", url: "https://www.thenorthface.com", label: "The North Face",
    render: () => (
      <span className="inline-flex items-center gap-2">
        <img src={SI("thenorthface")} alt="" aria-hidden className="h-8 w-auto object-contain dark:invert shrink-0"/>
        <span className="flex flex-col leading-[1.1] text-left" aria-label="The North Face">
          <span className="text-[8px] font-black tracking-[0.15em] uppercase" style={{color:"currentColor"}}>THE</span>
          <span className="text-[8px] font-black tracking-[0.15em] uppercase" style={{color:"currentColor"}}>NORTH</span>
          <span className="text-[8px] font-black tracking-[0.15em] uppercase" style={{color:"currentColor"}}>FACE</span>
        </span>
      </span>
    ),
  },
  /* 8 – Google full-colour wordmark */
  {
    id: "google", url: "https://www.google.com", label: "Google",
    render: () => <GoogleWordmark/>,
  },
  /* 9 – IBM 8-stripe wordmark */
  {
    id: "ibm", url: "https://www.ibm.com", label: "IBM",
    render: () => <img src={SI("ibm")} alt="IBM" className="h-8 w-auto object-contain dark:invert"/>,
  },
  /* 10 – MIT */
  {
    id: "mit", url: "https://www.mit.edu", label: "MIT",
    render: () => <MITWordmark/>,
  },
  /* 11 – Popular Science */
  {
    id: "popsci", url: "https://www.popsci.com", label: "Popular Science",
    render: () => <img src={SI("popularscience")} alt="Popular Science" className="h-8 w-auto object-contain dark:invert"/>,
  },
  /* 12 – Canon italic wordmark */
  {
    id: "canon", url: "https://www.canon.com", label: "Canon",
    render: () => <img src={SI("canon")} alt="Canon" className="h-7 w-auto object-contain dark:invert"/>,
  },
  /* 13 – GoPro */
  {
    id: "gopro", url: "https://www.gopro.com", label: "GoPro",
    render: () => <img src={SI("gopro")} alt="GoPro" className="h-7 w-auto object-contain dark:invert"/>,
  },
  /* 14 – Red Bull: icon + label */
  {
    id: "redbull", url: "https://www.redbull.com", label: "Red Bull",
    render: () => (
      <span className="inline-flex flex-col items-center gap-0.5">
        <img src={SI("redbull")} alt="" aria-hidden className="h-7 w-auto object-contain dark:invert"/>
        <span className="text-[9px] font-black tracking-[0.1em] uppercase leading-none" aria-label="Red Bull">Red Bull</span>
      </span>
    ),
  },
  /* 15 – Tesla custom wordmark */
  {
    id: "tesla", url: "https://www.tesla.com", label: "Tesla",
    render: () => <TeslaWordmark/>,
  },
  /* 16 – NVIDIA: icon + wordmark text */
  {
    id: "nvidia", url: "https://www.nvidia.com", label: "NVIDIA",
    render: () => (
      <span className="inline-flex items-center gap-2">
        <img src={SI("nvidia")} alt="" aria-hidden className="h-7 w-auto object-contain dark:invert shrink-0"/>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase" aria-label="NVIDIA">NVIDIA</span>
      </span>
    ),
  },
  /* 17 – Warner Bros.: icon + text */
  {
    id: "wb", url: "https://www.warnerbros.com", label: "Warner Bros.",
    render: () => (
      <span className="inline-flex items-center gap-1.5">
        <img src={SI("warnerbros")} alt="" aria-hidden className="h-7 w-auto object-contain dark:invert shrink-0"/>
        <span className="flex flex-col leading-[1.15] text-left" aria-label="Warner Bros.">
          <span className="text-[8px] font-black tracking-[0.12em] uppercase">WARNER</span>
          <span className="text-[8px] font-black tracking-[0.12em] uppercase">BROS.</span>
        </span>
      </span>
    ),
  },
  /* 18 – Claude (Anthropic) */
  {
    id: "claude", url: "https://www.anthropic.com/claude", label: "Claude",
    render: () => (
      <span className="inline-flex items-center gap-1.5">
        <img src={SI("anthropic")} alt="" aria-hidden className="h-6 w-auto object-contain dark:invert shrink-0"/>
        <span className="text-[13px] font-semibold tracking-wide" aria-label="Claude">Claude</span>
      </span>
    ),
  },
  /* 19 – NBC: peacock + NBC text */
  {
    id: "nbc", url: "https://www.nbc.com", label: "NBC",
    render: () => (
      <span className="inline-flex flex-col items-center gap-0.5">
        <img src={SI("nbc")} alt="" aria-hidden className="h-7 w-auto object-contain dark:invert"/>
        <span className="text-[9px] font-black tracking-[0.25em] uppercase leading-none" aria-label="NBC">NBC</span>
      </span>
    ),
  },
];

/* ── LOGO ITEM ────────────────────────────────────────────────── */

function LogoItem({ partner }) {
  return (
    <a
      id={`partner-${partner.id}`}
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.label}
      title={partner.label}
      className="
        group
        inline-flex items-center justify-center
        min-w-[110px] max-w-[170px] h-[52px] px-3
        text-neutral-600 dark:text-neutral-400
        hover:text-neutral-900 dark:hover:text-white
        opacity-55 hover:opacity-100
        transition-all duration-300
        hover:-translate-y-0.5
      "
    >
      {partner.render()}
    </a>
  );
}

/* ── SECTION ──────────────────────────────────────────────────── */

export default function PartnerLogos({ lang = "tr" }) {
  const heading = lang === "en" ? "Partners & References" : "Ortaklar & Referanslar";
  const sub = lang === "en"
    ? "Organizations defining the frontier of science and exploration"
    : "Bilim ve keşfin sınırlarını belirleyen kuruluşlar";

  return (
    <section
      className="glass-nav transition-theme"
      style={{ paddingTop: "48px", paddingBottom: "48px", borderTop: "1px solid var(--border-color)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>
            {heading}
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-subtle)" }}>{sub}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 max-w-5xl mx-auto">
          {PARTNERS.map((p) => (
            <LogoItem key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
