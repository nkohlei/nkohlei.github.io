"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setWidth(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-200/20 dark:bg-zinc-800/20 z-[100]">
      <div
        className="h-full progress-bar-gradient transition-all duration-100 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
