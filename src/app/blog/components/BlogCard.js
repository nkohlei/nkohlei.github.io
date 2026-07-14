"use client";

import Link from "next/link";

/* ────────────────────────────────────────────────
   FEATURED CARD  (left 2/3 hero column)
   Large image with magnetic hover, premium border,
   category badge, and gradient overlay.
──────────────────────────────────────────────── */
export function FeaturedCard({ post }) {
  return (
    <article className="group relative flex flex-col h-full" id={`post-featured-${post.id}`}>
      {/* ── Image Container ── */}
      <div className="relative w-full overflow-hidden rounded-xl mb-5"
        style={{
          border: "1px solid var(--border-color)",
          transition: "border-color 0.5s cubic-bezier(0.16,1,0.3,1)",
          aspectRatio: "16/9",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover object-center"
          style={{
            transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease",
            filter: "saturate(0.9)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.filter = "saturate(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "saturate(0.9)";
          }}
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Meta ── */}
      <div className="flex items-center gap-3 mb-3">
        <span className="badge-category">{post.category}</span>
        <span
          className="font-mono text-[10px] uppercase tracking-widest"
          style={{ color: "var(--foreground-muted)" }}
        >
          {post.readTime}
        </span>
        <span
          className="font-mono text-[10px]"
          style={{ color: "var(--foreground-muted)" }}
        >
          · {post.date}
        </span>
      </div>

      {/* ── Title ── */}
      <h3
        className="text-2xl sm:text-3xl font-black leading-tight mb-3 transition-colors duration-300"
        style={{
          letterSpacing: "-0.03em",
          color: "var(--foreground)",
        }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="focus:outline-none focus-visible:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          {post.title}
        </Link>
      </h3>

      {/* ── Excerpt ── */}
      <p
        className="text-sm leading-relaxed mb-5 line-clamp-3"
        style={{ color: "var(--foreground-muted)" }}
      >
        {post.excerpt}
      </p>

      {/* ── CTA ── */}
      <Link
        href={`/blog/${post.slug}`}
        className="group/cta inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
      >
        ANALİZİ AÇ
        <span
          className="transition-transform duration-300 group-hover/cta:translate-x-1"
        >→</span>
      </Link>
    </article>
  );
}

/* ────────────────────────────────────────────────
   MINIMAL CARD  (right 1/3 vertical index)
   Typography-only, neon left-border on hover,
   no image.
──────────────────────────────────────────────── */
export function MinimalCard({ post }) {
  return (
    <article
      className="group relative flex items-stretch py-5 last:pb-0 first:pt-0"
      id={`post-minimal-${post.id}`}
      style={{ borderBottom: "1px solid var(--border-color)" }}
    >
      {/* Neon left indicator */}
      <div
        className="flex-shrink-0 mr-4"
        style={{ width: "2px", background: "transparent", borderRadius: "2px", transition: "background 0.3s ease" }}
        ref={(el) => {
          if (!el) return;
          const parent = el.closest("article");
          if (!parent) return;
          const enter = () => { el.style.background = "#6366f1"; };
          const leave = () => { el.style.background = "transparent"; };
          parent.addEventListener("mouseenter", enter);
          parent.addEventListener("mouseleave", leave);
        }}
      />

      <div className="flex flex-col flex-1 justify-between">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span className="badge-category">{post.category}</span>
          <span
            className="font-mono text-[10px]"
            style={{ color: "var(--foreground-muted)" }}
          >
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-sm font-bold leading-snug mb-3 transition-colors duration-300"
          style={{ color: "var(--foreground)", letterSpacing: "-0.01em" }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="focus:outline-none hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            {post.title}
          </Link>
        </h4>

        {/* Excerpt (2 lines) */}
        <p
          className="text-xs leading-relaxed line-clamp-2 mb-3"
          style={{ color: "var(--foreground-muted)" }}
        >
          {post.excerpt}
        </p>

        {/* Action */}
        <Link
          href={`/blog/${post.slug}`}
          className="group/link inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest transition-colors duration-300"
          style={{ color: "var(--foreground-muted)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
        >
          OKU
          <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────
   DEFAULT EXPORT for backward compatibility
──────────────────────────────────────────────── */
export default function BlogCard({ post, minimal = false }) {
  if (minimal) return <MinimalCard post={post} />;
  return <FeaturedCard post={post} />;
}
