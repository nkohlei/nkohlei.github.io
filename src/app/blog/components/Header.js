"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";

/* ── Left nav items (non-article pages) ── */
const LEFT_NAV = [
  { key: "analyses", tr: "Analizler",  en: "Analyses",   href: "/blog" },
  { key: "calculations", tr: "Hesaplama Araçları", en: "Calculation Tools", href: "/calculations" },
];

/* ── Modules dropdown entries ── */
const MODULES_ITEMS = [
  { icon: "🌌", key: "physics",   tr: "Teorik Fizik",           en: "Theoretical Physics",       href: "/blog" },
  { icon: "🚀", key: "cosmo",     tr: "Kozmoloji & Uzay",        en: "Cosmology & Space",         href: "/blog" },
  { icon: "🏔️", key: "extreme",   tr: "Ekstrem Doğa Fiziği",    en: "Extreme Adventure",         href: "/blog" },
  { icon: "⚫", key: "bh",        tr: "Kozmik Simülatör",        en: "Cosmic Simulator",          href: "/calculations" },
  { icon: "📊", key: "alt",       tr: "İrtifa Hesaplayıcı",      en: "Altitude Calculator",       href: "/calculations" },
];

const NAV_LABELS = {
  tr: { modules: "Modüller", back: "← Geri Dön" },
  en: { modules: "Modules",  back: "← Go Back"  },
};

export default function Header({ isArticle = false, lang = "tr", onLangChange }) {
  const [theme,          setTheme]          = useState("dark");
  const [scrolled,       setScrolled]       = useState(false);
  const [searchOpen,     setSearchOpen]     = useState(false);
  const [dropdownOpen,   setDropdownOpen]   = useState(false);
  const dropdownRef = useRef(null);
  const t = NAV_LABELS[lang] || NAV_LABELS.tr;

  /* Initialise theme from localStorage */
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  /* Scroll listener */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!dropdownOpen) return;
    const h = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [dropdownOpen]);

  /* ESC closes search */
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const toggleLang = () => {
    const next = lang === "tr" ? "en" : "tr";
    onLangChange?.(next);
  };

  return (
    <>
      <header
        className="glass-nav sticky top-0 z-40 w-full transition-theme"
        style={{
          borderBottom: scrolled
            ? "1px solid var(--border-color)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--glass-shadow)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl h-15 items-center justify-between px-4 sm:px-6 lg:px-8 gap-4"
          style={{ height: "60px" }}>

        {/* ── LEFT SECTION: Logo + primary nav ── */}
          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link href="/blog" className="flex items-center gap-2.5 shrink-0 mr-4">
              <span className="relative flex h-1.5 w-1.5" style={{ flexShrink: 0 }}>
                <span className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "var(--foreground-muted)", animation: "ping-soft 2s cubic-bezier(0,0,0.2,1) infinite", opacity: 0.6 }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5"
                  style={{ background: "var(--foreground-muted)" }} />
              </span>
              <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)", fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>
                EVENT HORIZON
              </span>
            </Link>

            {/* Left nav — hidden on article pages and small screens */}
            {!isArticle && (
              <nav className="hidden md:flex items-center gap-0.5">
                {LEFT_NAV.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="px-3 py-1.5 rounded-lg"
                    style={{ fontSize: "12px", color: "var(--foreground-muted)", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-bg)"; e.currentTarget.style.color = "var(--foreground)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground-muted)"; }}
                  >
                    {lang === "en" ? item.en : item.tr}
                  </Link>
                ))}

                {/* Modules dropdown */}
                <div ref={dropdownRef} style={{ position: "relative" }}>
                  <button
                    id="modules-btn"
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg"
                    style={{
                      color: dropdownOpen ? "var(--foreground)" : "var(--foreground-muted)",
                      background: dropdownOpen ? "var(--glass-bg)" : "transparent",
                      fontSize: "12px", border: "none", cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-bg)"; e.currentTarget.style.color = "var(--foreground)"; }}
                    onMouseLeave={(e) => { if (!dropdownOpen) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground-muted)"; } }}
                  >
                    {t.modules}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      style={{ transition: "transform 0.2s ease", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="dropdown-menu" style={{ minWidth: "240px", left: 0, transform: "none" }}>
                      {MODULES_ITEMS.map((item) => (
                        <Link
                          key={item.key}
                          href={item.href}
                          className="dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span style={{ fontSize: "14px" }}>{item.icon}</span>
                          <span>{lang === "en" ? item.en : item.tr}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            )}

            {/* Back link — article page only */}
            {isArticle && (
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{ fontSize: "12px", color: "var(--foreground-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                {t.back}
              </Link>
            )}
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Search button */}
            <button
              id="search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Ara"
              className="flex items-center justify-center rounded-lg transition-theme"
              style={{
                width: "34px", height: "34px",
                border: "1px solid var(--border-color)",
                background: "transparent", cursor: "pointer",
                color: "var(--foreground-muted)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-bg)"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            {/* Language toggle */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLang}
              aria-label="Dil Değiştir"
              className="flex items-center gap-1 rounded-lg transition-theme"
              style={{
                height: "34px", padding: "0 10px",
                border: "1px solid var(--border-color)",
                background: "transparent", cursor: "pointer",
                color: "var(--foreground-muted)",
                fontSize: "11px", fontFamily: "var(--font-geist-mono), monospace",
                fontWeight: 600, letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-bg)"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
            >
              <span style={{ opacity: lang === "tr" ? 1 : 0.4, transition: "opacity 0.3s" }}>TR</span>
              <span style={{ color: "var(--border-hover)" }}>/</span>
              <span style={{ opacity: lang === "en" ? 1 : 0.4, transition: "opacity 0.3s" }}>EN</span>
            </button>

            {/* Theme toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Temayı Değiştir"
              className="flex items-center justify-center rounded-lg transition-theme"
              style={{
                width: "34px", height: "34px",
                border: "1px solid var(--border-color)",
                background: "transparent", cursor: "pointer",
                color: "var(--foreground-muted)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--glass-bg)"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.borderColor = "var(--border-color)"; }}
            >
              {theme === "dark" ? (
                /* Sun */
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                /* Moon */
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Search modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        lang={lang}
      />
    </>
  );
}
