"use client";

import { useState } from "react";
import { FeaturedCard, MinimalCard, GridCard } from "./components/BlogCard";
import CookieConsent from "./components/CookieConsent";
import ReadingProgressBar from "./components/ReadingProgressBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteCards from "./components/QuoteCards";
import { posts } from "./data/posts";

const HERO_TEXT = {
  tr: {
    badge: "SECURE DEEP SCIENCE ARCHIVE // CLASSIFIED",
    title: ["EVENT", "HORIZON"],
    sub: "Evrenin fiziksel sınırlarını, astrofiziksel kuramları ve ekstrem doğa koşullarının biyofiziksel sınırlarını araştıran bağımsız teknik analiz arşivi.",
    featuredLabel: "ÖNE ÇIKAN DOKÜMAN",
    indexLabel: "TEKNİK İNDEKS",
    calcLink: "→ Analiz & Hesaplama Portali",
    gridLabel: "TÜM ANALİZLER",
    adSponsor: "SPONSOR PLACEMENT",
    adSponsorGrid: "SPONSOR IN-GRID",
    adBottom: "SPONSOR BOTTOM DISPLAY",
  },
  en: {
    badge: "SECURE DEEP SCIENCE ARCHIVE // CLASSIFIED",
    title: ["EVENT", "HORIZON"],
    sub: "An independent technical analysis archive researching the physical limits of the universe, astrophysical theories, and the biophysical boundaries of extreme environments.",
    featuredLabel: "FEATURED DOCUMENT",
    indexLabel: "TECHNICAL INDEX",
    calcLink: "→ Analysis & Calculations Portal",
    gridLabel: "ALL ANALYSES",
    adSponsor: "SPONSOR PLACEMENT",
    adSponsorGrid: "SPONSOR IN-GRID",
    adBottom: "SPONSOR BOTTOM DISPLAY",
  },
};

export default function BlogHome() {
  const [lang, setLang] = useState("tr");

  const featuredPost  = posts[0];
  const indexPosts    = posts.slice(1);
  const T = HERO_TEXT[lang];

  return (
    <div className="min-h-screen transition-theme" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      {/* Reading progress */}
      <ReadingProgressBar />

      {/* Header — owns lang state via callback */}
      <Header isArticle={false} lang={lang} onLangChange={setLang} />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative py-20 animate-fade-in-up"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ border: "1px solid var(--border-color)", background: "var(--glass-bg)", color: "var(--foreground-muted)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full inline-block"
              style={{ background: "var(--foreground-subtle)", animation: "ping-soft 2s ease infinite" }}
            />
            {T.badge}
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-black uppercase leading-[0.95] animate-fade-in-up-delay-1"
              style={{ fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "-0.05em", color: "var(--foreground)" }}
            >
              {T.title[0]}<br />{T.title[1]}
            </h1>
            <p
              className="mt-6 text-base leading-relaxed max-w-2xl animate-fade-in-up-delay-2"
              style={{ color: "var(--foreground-muted)" }}
            >
              {T.sub}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN
      ══════════════════════════════════════ */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* AdSense top */}
        <AdPlaceholder label={T.adSponsor} size="728×90" mb className="mb-12" />

        {/* ── ASYMMETRIC GRID 8/4 ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 mb-20 animate-fade-in-up-delay-1">

          {/* Left — featured hero */}
          <div className="lg:col-span-8">
            <SectionLabel dot="accent">{T.featuredLabel}</SectionLabel>
            <FeaturedCard post={featuredPost} lang={lang} />
          </div>

          {/* Right — vertical index */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <SectionLabel dot="muted">{T.indexLabel}</SectionLabel>

            {/* Index panel */}
            <div
              className="glass-card rounded-xl p-4 flex-1"
            >
              {indexPosts.map((p) => (
                <MinimalCard key={p.id} post={p} lang={lang} />
              ))}
            </div>

            {/* Calculations portal link */}
            <a
              href="/calculations"
              className="glass-card glass-card-hover rounded-xl p-4 font-mono text-[11px] uppercase tracking-widest flex items-center justify-between"
              style={{ color: "var(--foreground-muted)", textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
            >
              <span>📊 {T.calcLink}</span>
            </a>

            {/* AdSense in-grid */}
            <AdPlaceholder label={T.adSponsorGrid} size="300×250" />
          </div>
        </div>

        {/* ── ALL ARTICLES — VISUAL GRID 3 col ── */}
        <section className="mb-20 animate-fade-in-up-delay-2">
          <SectionLabel dot="muted">{T.gridLabel}</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {posts.map((p) => (
              <GridCard key={p.id} post={p} lang={lang} />
            ))}
          </div>
        </section>

        {/* ── QUOTE CARDS ── */}
        <section className="mb-20">
          <QuoteCards lang={lang} />
        </section>

        {/* AdSense bottom */}
        <AdPlaceholder label={T.adBottom} size="970×90" />
      </main>

      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}

/* ──────── Helper sub-components ──────── */

function SectionLabel({ children, dot = "muted" }) {
  return (
    <div
      className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-4"
      style={{ color: "var(--foreground-muted)" }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full inline-block"
        style={{ background: dot === "accent" ? "var(--accent)" : "var(--foreground-subtle)" }}
      />
      {children}
    </div>
  );
}

function AdPlaceholder({ label, size, mb }) {
  return (
    <div
      className={`py-5 px-4 text-center font-mono rounded-xl${mb ? " mb-12" : ""}`}
      style={{ border: "1px dashed var(--border-color)", background: "transparent" }}
    >
      <span className="block text-[9px] uppercase tracking-widest mb-2" style={{ color: "var(--foreground-subtle)", opacity: 0.5 }}>
        // {label} //
      </span>
      <div
        className="mx-auto flex items-center justify-center rounded-lg"
        style={{ height: "56px", maxWidth: "800px", border: "1px dashed var(--border-color)" }}
      >
        <span className="text-[9px] uppercase tracking-widest" style={{ color: "var(--foreground-subtle)", opacity: 0.35 }}>
          {size}
        </span>
      </div>
    </div>
  );
}
