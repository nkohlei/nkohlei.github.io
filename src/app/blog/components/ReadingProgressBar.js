"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setWidth(Math.min(scrolled, 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Container — sits above the header (z-[9999]) */
    <div
      className="fixed top-0 left-0 w-full z-[9999] pointer-events-none"
      style={{ height: "3px", background: "rgba(0,0,0,0.04)" }}
      role="progressbar"
      aria-valuenow={Math.round(width)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Sayfa okuma ilerlemesi"
    >
      <div
        className="h-full progress-bar-gradient"
        style={{
          width: `${width}%`,
          transition: "width 80ms linear",
          boxShadow: width > 2 ? "0 0 8px rgba(99,102,241,0.5)" : "none",
        }}
      />
    </div>
  );
}
