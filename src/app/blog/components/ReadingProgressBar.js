"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) setWidth(Math.min((window.scrollY / scrollable) * 100, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(width)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "2px",
        background: "var(--glass-border)",
        zIndex: 9999, pointerEvents: "none",
      }}
    >
      <div
        className="progress-bar-gradient"
        style={{
          height: "100%",
          width: `${width}%`,
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}
