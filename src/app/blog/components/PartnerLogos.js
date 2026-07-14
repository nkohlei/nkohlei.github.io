"use client";

/* ───────────────────────────────────────────────────────────────────
   PARTNER LOGOS
   • CDN logos: https://cdn.simpleicons.org/{slug}/000000
     → black in light mode, inverted white in dark mode via dark:invert
   • Oxypace: official website image (coloured)
   • Space.com: clean wordmark SVG (not on simple-icons)
─────────────────────────────────────────────────────────────────── */

const CDN = (slug) =>
  `https://cdn.simpleicons.org/${slug}/000000`;

/** Logos ordered as: Oxypace → NASA → SpaceX → CERN → Space.com →
    NatGeo → NorthFace → Google → IBM → MIT → PopSci → Canon →
    GoPro → RedBull → Tesla → NVIDIA → WarnerBros → Anthropic → NBC */
const PARTNERS = [
  {
    id: "oxypace",
    url: "https://oxypace.com.tr",
    label: "Oxypace",
    type: "img-pair",
    icon: "https://oxypace.com.tr/logo.png",
    wordmark: "https://oxypace.com.tr/oxypace-text-logo2.webp",
  },
  { id: "nasa",              url: "https://www.nasa.gov",               label: "NASA",               slug: "nasa" },
  { id: "spacex",            url: "https://www.spacex.com",             label: "SpaceX",             slug: "spacex" },
  { id: "cern",              url: "https://home.cern",                  label: "CERN",               slug: "cern" },
  {
    id: "spacecom",
    url: "https://www.space.com",
    label: "Space.com",
    type: "svg",
    svg: (
      <svg viewBox="0 0 220 44" className="h-7 w-auto max-w-full" fill="currentColor" aria-label="Space.com">
        <text x="0" y="36" fontFamily="'Arial Black','Arial Bold',Gadget,sans-serif" fontWeight="900" fontSize="44" letterSpacing="-2">SPACE</text>
        <text x="150" y="30" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="18">.com</text>
      </svg>
    ),
  },
  { id: "nationalgeographic", url: "https://www.nationalgeographic.com", label: "National Geographic", slug: "nationalgeographic" },
  { id: "thenorthface",       url: "https://www.thenorthface.com",       label: "The North Face",       slug: "thenorthface" },
  { id: "google",             url: "https://www.google.com",             label: "Google",               slug: "google" },
  { id: "ibm",                url: "https://www.ibm.com",               label: "IBM",                  slug: "ibm" },
  { id: "mit",                url: "https://www.mit.edu",               label: "MIT",                  slug: "mit" },
  { id: "popularscience",     url: "https://www.popsci.com",            label: "Popular Science",      slug: "popularscience" },
  { id: "canon",              url: "https://www.canon.com",             label: "Canon",                slug: "canon" },
  { id: "gopro",              url: "https://www.gopro.com",             label: "GoPro",                slug: "gopro" },
  { id: "redbull",            url: "https://www.redbull.com",           label: "Red Bull",             slug: "redbull" },
  { id: "tesla",              url: "https://www.tesla.com",             label: "Tesla",                slug: "tesla" },
  { id: "nvidia",             url: "https://www.nvidia.com",            label: "NVIDIA",               slug: "nvidia" },
  { id: "warnerbros",         url: "https://www.warnerbros.com",        label: "Warner Bros.",         slug: "warnerbros" },
  { id: "anthropic",          url: "https://www.anthropic.com/claude",  label: "Claude",               slug: "anthropic" },
  { id: "nbc",                url: "https://www.nbc.com",               label: "NBC",                  slug: "nbc" },
];

function LogoItem({ partner }) {
  const inner = (() => {
    if (partner.type === "img-pair") {
      return (
        <span className="inline-flex items-center gap-1.5">
          <img
            src={partner.icon}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto object-contain"
          />
          <img
            src={partner.wordmark}
            alt={partner.label}
            className="h-4 w-auto object-contain"
          />
        </span>
      );
    }
    if (partner.type === "svg") {
      return (
        <span className="text-neutral-700 dark:text-neutral-300">
          {partner.svg}
        </span>
      );
    }
    // CDN simple-icons — black logo, inverted to white in dark mode
    return (
      <img
        src={CDN(partner.slug)}
        alt={partner.label}
        width={120}
        height={40}
        className="h-7 w-auto max-w-[120px] object-contain dark:invert"
        loading="lazy"
        decoding="async"
      />
    );
  })();

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
        w-[120px] h-[48px]
        opacity-50 hover:opacity-100
        transition-opacity duration-300
        hover:-translate-y-0.5 transition-transform
      "
    >
      {inner}
    </a>
  );
}

export default function PartnerLogos({ lang = "tr" }) {
  const heading =
    lang === "en" ? "Partners & References" : "Ortaklar & Referanslar";
  const sub =
    lang === "en"
      ? "Organizations defining the frontier of science and exploration"
      : "Bilim ve keşfin sınırlarını belirleyen kuruluşlar";

  return (
    <section
      className="glass-nav transition-theme"
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p
            className="font-mono text-[10px] uppercase tracking-widest mb-2"
            style={{ color: "var(--foreground-muted)" }}
          >
            {heading}
          </p>
          <p className="text-sm" style={{ color: "var(--foreground-subtle)" }}>
            {sub}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {PARTNERS.map((p) => (
            <LogoItem key={p.id} partner={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
