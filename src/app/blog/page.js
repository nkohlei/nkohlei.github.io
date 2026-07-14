"use client";

import BlogCard, { FeaturedCard, MinimalCard } from "./components/BlogCard";
import SimulatorWidget from "./components/SimulatorWidget";
import CookieConsent from "./components/CookieConsent";
import ReadingProgressBar from "./components/ReadingProgressBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { posts } from "./data/posts";

export default function BlogHome() {
  const featuredPost = posts[0];
  const indexPosts = posts.slice(1);

  return (
    <div
      className="min-h-screen transition-theme"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ── Reading progress bar (z-9999, fixed top) ── */}
      <ReadingProgressBar />

      {/* ── Navigation ── */}
      <Header isArticle={false} />

      {/* ════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════ */}
      <section
        className="relative py-20 animate-fade-in-up"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Label badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              border: "1px solid var(--border-color)",
              background: "rgba(99,102,241,0.04)",
              color: "var(--foreground-muted)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-indigo-500"
              style={{ animation: "neon-ping 1.5s cubic-bezier(0,0,0.2,1) infinite", opacity: 0.8 }}
            />
            SECURE DEEP SCIENCE ARCHIVE // CLASSIFIED
          </div>

          <div className="max-w-3xl">
            <h1
              className="font-black uppercase leading-[0.95] animate-fade-in-up-delay-1"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                letterSpacing: "-0.05em",
                color: "var(--foreground)",
              }}
            >
              EVENT<br />HORIZON
            </h1>

            <p
              className="mt-6 text-base leading-relaxed max-w-2xl animate-fade-in-up-delay-2"
              style={{ color: "var(--foreground-muted)" }}
            >
              Evrenin fiziksel sınırlarını, astrofiziksel kuramları, kozmolojik modelleri
              ve ekstrem doğa koşullarının biyofiziksel sınırlarını araştıran bağımsız
              teknik analiz arşivi.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════ */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* ── AdSense Top ── */}
        <section
          className="mb-16 py-6 px-4 text-center font-mono rounded-xl animate-fade-in-up"
          style={{
            border: "1px dashed var(--border-color)",
            background: "transparent",
          }}
        >
          <span
            className="block text-[9px] tracking-widest uppercase mb-2"
            style={{ color: "var(--foreground-muted)", opacity: 0.5 }}
          >
            // SPONSOR PLACEMENT //
          </span>
          <div
            className="mx-auto flex items-center justify-center rounded-lg"
            style={{
              height: "64px",
              maxWidth: "728px",
              border: "1px dashed var(--border-color)",
              background: "rgba(0,0,0,0.01)",
            }}
          >
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ color: "var(--foreground-muted)", opacity: 0.35 }}
            >
              ADVERTISING PARTNER DISPLAY AREA (728×90)
            </span>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            ASYMMETRIC GRID: 8 / 4 columns
            Left → devasa featured post
            Right → vertical typography index
        ════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-20 animate-fade-in-up-delay-1">

          {/* ── LEFT: Featured Hero ── */}
          <div className="lg:col-span-8">
            {/* Section label */}
            <div
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-6"
              style={{ color: "var(--foreground-muted)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                style={{ animation: "neon-ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              ÖNE ÇIKAN DOKÜMAN
            </div>

            <FeaturedCard post={featuredPost} />
          </div>

          {/* ── RIGHT: Vertical Technical Index ── */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Section label */}
            <div
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-6"
              style={{ color: "var(--foreground-muted)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 inline-block" />
              TEKNİK İNDEKS &amp; ANALİZLER
            </div>

            {/* Index card container */}
            <div
              className="flex-1 rounded-xl p-5"
              style={{
                border: "1px solid var(--border-color)",
                background: "var(--panel-bg)",
              }}
            >
              {indexPosts.map((post) => (
                <MinimalCard key={post.id} post={post} />
              ))}
            </div>

            {/* AdSense In-Grid */}
            <div
              className="mt-5 py-5 px-4 rounded-xl text-center font-mono"
              style={{
                border: "1px dashed var(--border-color)",
                background: "transparent",
              }}
            >
              <span
                className="block text-[9px] tracking-widest uppercase mb-2"
                style={{ color: "var(--foreground-muted)", opacity: 0.4 }}
              >
                // SPONSOR IN-GRID //
              </span>
              <div
                className="flex items-center justify-center rounded-lg"
                style={{
                  height: "112px",
                  border: "1px dashed var(--border-color)",
                  background: "rgba(0,0,0,0.01)",
                }}
              >
                <span
                  className="text-[9px] tracking-widest uppercase"
                  style={{ color: "var(--foreground-muted)", opacity: 0.3 }}
                >
                  MEDIUM RECTANGLE (300×250)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            SCIENCE SIMULATOR SECTION
        ════════════════════════════════════════════════ */}
        <section className="mb-20 animate-fade-in-up-delay-2">
          <div
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest mb-6"
            style={{ color: "var(--foreground-muted)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 inline-block" style={{ boxShadow: "0 0 6px rgba(99,102,241,0.8)" }} />
            BİLİMSEL ANALİZ MODÜLÜ // RESEARCH APEX
          </div>
          <SimulatorWidget />
        </section>

        {/* ── AdSense Bottom ── */}
        <section
          className="py-6 px-4 text-center font-mono rounded-xl animate-fade-in-up-delay-3"
          style={{
            border: "1px dashed var(--border-color)",
            background: "transparent",
          }}
        >
          <span
            className="block text-[9px] tracking-widest uppercase mb-2"
            style={{ color: "var(--foreground-muted)", opacity: 0.5 }}
          >
            // SPONSOR BOTTOM DISPLAY //
          </span>
          <div
            className="mx-auto flex items-center justify-center rounded-lg"
            style={{
              height: "80px",
              maxWidth: "970px",
              border: "1px dashed var(--border-color)",
              background: "rgba(0,0,0,0.01)",
            }}
          >
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ color: "var(--foreground-muted)", opacity: 0.35 }}
            >
              LEADERBOARD PLACEHOLDER (970×90 / 728×90)
            </span>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Cookie Banner ── */}
      <CookieConsent />
    </div>
  );
}
