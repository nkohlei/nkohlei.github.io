"use client";

import { useRef, useCallback } from "react";

const QUOTES = [
  {
    id: 1,
    text: { tr: "Hayal gücü bilgiden daha önemlidir.", en: "Imagination is more important than knowledge." },
    author: "Albert Einstein",
    role:   { tr: "Teorik Fizikçi", en: "Theoretical Physicist" },
    icon: "∞",
  },
  {
    id: 2,
    text: { tr: "Yukarıdaki yıldızlara bakın, ayaklarınıza değil.", en: "Look up at the stars, not down at your feet." },
    author: "Stephen Hawking",
    role:   { tr: "Kozmolog & Fizikçi", en: "Cosmologist & Physicist" },
    icon: "★",
  },
  {
    id: 3,
    text: { tr: "Zorluklar, karakteri inşa eder.", en: "Adversity builds character." },
    author: "Alex Honnold",
    role:   { tr: "Serbest Tırmanışçı", en: "Free Solo Climber" },
    icon: "▲",
  },
  {
    id: 4,
    text: { tr: "Geleceği inşa etmek, onu tahmin etmekten daha kolaydır.", en: "The best way to predict the future is to build it." },
    author: "Elon Musk",
    role:   { tr: "Girişimci & Mühendis", en: "Entrepreneur & Engineer" },
    icon: "◈",
  },
];

function QuoteCard({ quote, lang }) {
  const cardRef = useRef(null);
  const rafRef  = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2); // –1 to +1
      const dy   = (e.clientY - cy) / (rect.height / 2); // –1 to +1
      const tiltX =  dy * -8;  // degrees
      const tiltY =  dx *  8;
      cardRef.current.style.transform =
        `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(4px)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card rounded-2xl p-6 flex flex-col gap-4 cursor-default select-none"
      style={{ transition: "transform 0.12s ease, box-shadow 0.4s ease, border-color 0.4s ease" }}
    >
      {/* Icon */}
      <span
        style={{
          fontSize: "20px",
          color: "var(--foreground-subtle)",
          fontFamily: "monospace",
          lineHeight: 1,
        }}
      >
        {quote.icon}
      </span>

      {/* Quote text */}
      <blockquote
        style={{
          fontSize: "15px",
          fontStyle: "italic",
          lineHeight: "1.65",
          color: "var(--foreground)",
          fontWeight: 400,
          margin: 0,
        }}
      >
        &ldquo;{quote.text[lang] || quote.text.tr}&rdquo;
      </blockquote>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--glass-border)" }} />

      {/* Attribution */}
      <div>
        <p
          style={{
            fontSize: "12px", fontWeight: 600,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
          }}
        >
          {quote.author}
        </p>
        <p
          style={{
            fontSize: "11px",
            color: "var(--foreground-subtle)",
            fontFamily: "var(--font-geist-mono), monospace",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginTop: "2px",
          }}
        >
          {quote.role[lang] || quote.role.tr}
        </p>
      </div>
    </div>
  );
}

export default function QuoteCards({ lang = "tr" }) {
  const heading = lang === "en"
    ? "Cosmic Wisdom"
    : "Kozmik Bilgelik";
  const sub = lang === "en"
    ? "Perspectives from those who pushed the limits"
    : "Sınırları zorlayanların perspektifinden";

  return (
    <section className="animate-fade-in-up-delay-2">
      {/* Section header */}
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-6"
        style={{ color: "var(--foreground-muted)" }}>
        <span className="h-1.5 w-1.5 rounded-full inline-block"
          style={{ background: "var(--foreground-subtle)" }} />
        {heading}
      </div>

      <p className="text-sm mb-8" style={{ color: "var(--foreground-muted)" }}>{sub}</p>

      {/* 2x2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {QUOTES.map((q) => (
          <QuoteCard key={q.id} quote={q} lang={lang} />
        ))}
      </div>
    </section>
  );
}
