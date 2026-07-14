"use client";

import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   FEATURED CARD  — left hero column, large image, badge, CTA
────────────────────────────────────────────────────────────── */
export function FeaturedCard({ post, lang = "tr" }) {
  const ctaLabel = lang === "en" ? "Read Analysis →" : "Analizi Aç →";
  const readLabel = lang === "en" ? "read" : "okuma";

  return (
    <article className="group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col" id={`post-featured-${post.id}`}>
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          style={{
            transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease",
            filter: "saturate(0.85)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.filter = "saturate(1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "saturate(0.85)"; }}
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)" }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Meta */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge-category">{post.category}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--foreground-subtle)" }}>
            {post.readTime} · {post.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black leading-snug transition-theme"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", letterSpacing: "-0.03em", color: "var(--foreground)" }}
        >
          <Link href={`/blog/${post.slug}`} className="focus:outline-none hover:opacity-80 transition-opacity">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--foreground-muted)" }}>
          {post.excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto font-mono text-[11px] uppercase tracking-widest transition-theme"
          style={{ color: "var(--accent)" }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────
   MINIMAL CARD  — right index column, typography-only
────────────────────────────────────────────────────────────── */
export function MinimalCard({ post, lang = "tr" }) {
  const readLabel = lang === "en" ? "Read →" : "Oku →";

  return (
    <article
      className="group relative flex gap-4 py-5 last:pb-0 first:pt-0"
      style={{ borderBottom: "1px solid var(--border-color)" }}
      id={`post-minimal-${post.id}`}
    >
      {/* Left accent line — appears on hover via JS */}
      <div
        className="shrink-0 rounded-full"
        style={{ width: "2px", background: "transparent", transition: "background 0.25s ease" }}
        ref={(el) => {
          if (!el) return;
          const art = el.closest("article");
          if (!art) return;
          const enter = () => { el.style.background = "var(--foreground-muted)"; };
          const leave = () => { el.style.background = "transparent"; };
          art.addEventListener("mouseenter", enter);
          art.addEventListener("mouseleave", leave);
        }}
      />

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge-category">{post.category}</span>
          <span className="font-mono text-[10px]" style={{ color: "var(--foreground-subtle)" }}>{post.readTime}</span>
        </div>

        <h4 className="text-sm font-bold leading-snug" style={{ letterSpacing: "-0.01em", color: "var(--foreground)" }}>
          <Link href={`/blog/${post.slug}`} className="focus:outline-none hover:opacity-70 transition-opacity">
            {post.title}
          </Link>
        </h4>

        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--foreground-muted)" }}>
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="font-mono text-[10px] uppercase tracking-widest transition-theme"
          style={{ color: "var(--foreground-subtle)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-subtle)"; }}
        >
          {readLabel}
        </Link>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────
   VISUAL GRID CARD  — 2x2/3x3 future article grid
   Image-prominent, full glassmorphism hover
────────────────────────────────────────────────────────────── */
export function GridCard({ post, lang = "tr" }) {
  return (
    <article
      className="group glass-card glass-card-hover rounded-xl overflow-hidden flex flex-col"
      id={`post-grid-${post.id}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          style={{
            transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          loading="lazy"
        />
        {/* Read time overlay */}
        <div
          className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            color: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {post.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <span className="badge-category self-start">{post.category}</span>
        <h4
          className="font-bold leading-snug"
          style={{ fontSize: "13px", letterSpacing: "-0.01em", color: "var(--foreground)" }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:opacity-75 transition-opacity focus:outline-none">
            {post.title}
          </Link>
        </h4>
        <p className="text-xs leading-relaxed line-clamp-2 flex-1" style={{ color: "var(--foreground-muted)" }}>
          {post.excerpt}
        </p>
        <p className="font-mono text-[10px]" style={{ color: "var(--foreground-subtle)" }}>{post.date}</p>
      </div>
    </article>
  );
}

/* Default export for backward compat */
export default function BlogCard({ post, minimal = false, lang = "tr" }) {
  if (minimal) return <MinimalCard post={post} lang={lang} />;
  return <FeaturedCard post={post} lang={lang} />;
}
