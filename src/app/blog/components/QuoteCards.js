"use client";

import { useRef, useCallback } from "react";

const QUOTES = [
  {
    id: 1,
    text:   { tr: "Hayal gücü bilgiden daha önemlidir.", en: "Imagination is more important than knowledge." },
    author: "Albert Einstein",
    role:   { tr: "Teorik Fizikçi · 1879–1955", en: "Theoretical Physicist · 1879–1955" },
    icon:   "∿",
    accentDark:  "rgba(129,140,248,0.06)",
    accentLight: "rgba(99,102,241,0.04)",
  },
  {
    id: 2,
    text:   { tr: "Yukarıdaki yıldızlara bakın, ayaklarınıza değil.", en: "Look up at the stars, not down at your feet." },
    author: "Stephen Hawking",
    role:   { tr: "Kozmolog & Fizikçi · 1942–2018", en: "Cosmologist & Physicist · 1942–2018" },
    icon:   "★",
    accentDark:  "rgba(139,92,246,0.06)",
    accentLight: "rgba(109,40,217,0.04)",
  },
  {
    id: 3,
    text:   { tr: "Zorluklar, karakteri inşa eder.", en: "Adversity builds character." },
    author: "Alex Honnold",
    role:   { tr: "Serbest Tırmanışçı · 1985–", en: "Free Solo Climber · 1985–" },
    icon:   "▲",
    accentDark:  "rgba(52,211,153,0.06)",
    accentLight: "rgba(16,185,129,0.04)",
  },
  {
    id: 4,
    text:   { tr: "Geleceği inşa etmek, onu tahmin etmekten daha kolaydır.", en: "The best way to predict the future is to build it." },
    author: "Elon Musk",
    role:   { tr: "Girişimci & Mühendis · 1971–", en: "Entrepreneur & Engineer · 1971–" },
    icon:   "◈",
    accentDark:  "rgba(14,165,233,0.06)",
    accentLight: "rgba(2,132,199,0.04)",
  },
];

function QuoteCard({ quote, lang }) {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      cardRef.current.style.transform =
        `perspective(900px) rotateX(${dy * -6}deg) rotateY(${dx * 6}deg) translateY(-6px)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }, []);

  const authorImage = quote.author.split(" ").pop().toLowerCase();

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card relative group overflow-hidden rounded-2xl p-6 flex flex-col gap-5 cursor-default select-none"
      style={{
        transition: "transform 0.12s ease, box-shadow 0.4s ease, border-color 0.35s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Image with Gradient Masking */}
      <div
        className="quote-bg-image absolute inset-y-0 right-0 w-1/2 md:w-2/5 pointer-events-none opacity-[0.45] dark:opacity-60 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('/images/quotes/${authorImage}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content wrapper with pointer-events-auto */}
      <div className="relative z-10 flex flex-col justify-between h-full pointer-events-auto flex-1 gap-5">
        {/* Icon + faint colour wash on hover */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: "12px",
        }}>
          <span style={{
            fontSize: "22px",
            lineHeight: 1,
            color: "var(--foreground-subtle)",
            fontFamily: "monospace",
            letterSpacing: "-0.05em",
          }}>
            {quote.icon}
          </span>
          {/* micro "QUOTE" tag */}
          <span style={{
            fontSize: "8px", fontFamily: "var(--font-geist-mono), monospace",
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "var(--foreground-subtle)", opacity: 0.6,
            border: "1px solid var(--glass-border)",
            padding: "2px 6px", borderRadius: "4px",
          }}>
            QUOTE
          </span>
        </div>

        {/* Quote text */}
        <blockquote style={{
          fontSize: "14px",
          fontStyle: "italic",
          lineHeight: "1.70",
          color: "var(--foreground)",
          fontWeight: 400,
          margin: 0,
          flex: 1,
        }}>
          &ldquo;{quote.text[lang] || quote.text.tr}&rdquo;
        </blockquote>

        {/* Separator */}
        <div style={{ height: "1px", background: "var(--glass-border)" }} />

        {/* Attribution */}
        <div>
          <p style={{
            fontSize: "13px", fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.015em",
            marginBottom: "3px",
          }}>
            {quote.author}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--foreground-subtle)" }}>
            {quote.role[lang] || quote.role.tr}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuoteCards({ lang = "tr" }) {
  const heading = lang === "en" ? "Cosmic Wisdom" : "Kozmik Bilgelik";
  const sub     = lang === "en"
    ? "Perspectives from those who pushed the limits"
    : "Sınırları zorlayanların perspektifinden";

  return (
    <section className="animate-fade-in-up-delay-2">
      {/* Section label */}
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-2"
        style={{ color: "var(--foreground-muted)" }}>
        <span className="h-1.5 w-1.5 rounded-full inline-block"
          style={{ background: "var(--foreground-subtle)" }} />
        {heading}
      </div>
      <p className="text-sm mb-8" style={{ color: "var(--foreground-muted)" }}>{sub}</p>

      {/* Asymmetric 2×2 — first card slightly larger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {QUOTES.map((q, i) => (
          <QuoteCard key={q.id} quote={q} lang={lang} />
        ))}
      </div>
    </section>
  );
}
