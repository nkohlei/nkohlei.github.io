"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ isArticle = false }) {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.05)] shadow-[0_1px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent"
      }`}
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/blog" className="flex items-center gap-3 group">
          {/* Animated dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75" style={{ animation: "neon-ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          </span>
          <span
            className="text-base font-black tracking-tighter transition-colors duration-500 select-none"
            style={{ color: theme === "dark" ? "#F5F5F7" : "#0D0E12", letterSpacing: "-0.04em" }}
          >
            EVENT HORIZON
          </span>
        </Link>

        {/* Navigation + Controls */}
        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-5 font-mono text-[11px]">
            {isArticle ? (
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-[color:var(--foreground-muted)] hover:text-[color:var(--foreground)] transition-colors duration-300 font-semibold"
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                GERİ DÖN
              </Link>
            ) : (
              <>
                <Link
                  href="/blog"
                  className="text-[color:var(--foreground)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-semibold uppercase tracking-wider"
                >
                  Arşiv
                </Link>
                <a
                  href="#"
                  className="text-[color:var(--foreground-muted)] hover:text-[color:var(--foreground)] transition-colors duration-300 uppercase tracking-wider"
                >
                  İndeks
                </a>
              </>
            )}
          </nav>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Temayı Değiştir"
            className="relative flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--foreground-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--foreground-muted)";
            }}
          >
            <span className="transition-all duration-500" style={{ transform: theme === "dark" ? "rotate(0deg)" : "rotate(180deg)" }}>
              {theme === "dark" ? (
                /* Sun icon */
                <svg className="h-[15px] w-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                /* Moon icon */
                <svg className="h-[15px] w-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
