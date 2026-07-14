"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ isArticle = false }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-white/5 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8 font-mono">
        <Link href="/blog" className="flex items-center gap-2">
          <span className="text-lg font-black tracking-widest bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-400 bg-clip-text text-transparent">
            EVENT HORIZON
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-xs">
            {isArticle ? (
              <Link
                href="/blog"
                className="text-zinc-500 hover:text-foreground transition-colors font-semibold"
              >
                [ GERİ DÖN ]
              </Link>
            ) : (
              <>
                <Link
                  href="/blog"
                  className="text-foreground hover:text-accent transition-colors font-semibold"
                >
                  [ ARCHIVES ]
                </Link>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-foreground transition-colors"
                >
                  [ INDEX ]
                </a>
              </>
            )}
          </nav>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 dark:text-zinc-400"
            aria-label="Temayı Değiştir"
          >
            {theme === "dark" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
