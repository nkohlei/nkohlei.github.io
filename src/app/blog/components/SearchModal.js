"use client";

import { useEffect, useRef, useState } from "react";
import { posts } from "../data/posts";

const TRANSLATIONS = {
  tr: { placeholder: "Makale ara...", noResults: "Sonuç bulunamadı.", hint: "ESC ile kapat" },
  en: { placeholder: "Search articles...", noResults: "No results found.", hint: "Press ESC to close" },
};

export default function SearchModal({ isOpen, onClose, lang = "tr" }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.tr;

  /* Focus input when opened */
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      const id = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  /* ESC key handler */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    /* Backdrop */
    <div
      id="search-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="animate-fade-in"
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        paddingTop: "15vh", paddingLeft: "16px", paddingRight: "16px",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Modal box */}
      <div
        className="glass-modal animate-slide-up w-full rounded-2xl overflow-hidden"
        style={{ maxWidth: "580px" }}
      >
        {/* Search input row */}
        <div
          className="flex items-center gap-3 px-5"
          style={{
            borderBottom: "1px solid var(--glass-border)",
            paddingTop: "18px", paddingBottom: "18px",
          }}
        >
          {/* Magnifier icon */}
          <svg
            width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="var(--foreground-muted)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            ref={inputRef}
            id="search-modal-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              fontSize: "15px", color: "var(--foreground)",
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
            }}
          />

          {/* ESC hint */}
          <kbd
            style={{
              flexShrink: 0, fontSize: "10px", fontFamily: "monospace",
              color: "var(--foreground-subtle)",
              border: "1px solid var(--border-color)",
              borderRadius: "4px", padding: "2px 5px",
              background: "var(--glass-bg)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div style={{ maxHeight: "55vh", overflowY: "auto" }}>
          {query.trim() === "" && (
            <div
              style={{
                padding: "28px 20px", textAlign: "center",
                fontSize: "12px", color: "var(--foreground-subtle)",
                fontFamily: "var(--font-geist-mono), monospace",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}
            >
              {t.hint}
            </div>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <div
              style={{
                padding: "28px 20px", textAlign: "center",
                fontSize: "13px", color: "var(--foreground-muted)",
              }}
            >
              {t.noResults}
            </div>
          )}

          {results.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              onClick={onClose}
              style={{ textDecoration: "none" }}
            >
              <div
                className="dropdown-item"
                style={{
                  flexDirection: "column", alignItems: "flex-start",
                  gap: "4px", padding: "14px 20px", borderRadius: 0,
                  borderBottom: "1px solid var(--glass-border)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-muted)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <span
                  style={{
                    fontSize: "13px", fontWeight: 600,
                    color: "var(--foreground)", lineHeight: "1.4",
                  }}
                >
                  {post.title}
                </span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className="badge-category">{post.category}</span>
                  <span style={{ fontSize: "11px", color: "var(--foreground-subtle)" }}>
                    {post.readTime}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
