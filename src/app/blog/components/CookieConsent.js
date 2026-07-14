"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full mx-auto animate-fade-in-up px-4 sm:px-0">
      <div className="glass-panel rounded-xl p-5 shadow-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50/90 dark:bg-[#0d0e12]/90 backdrop-blur-md">
        <div className="text-xs text-slate-800 dark:text-zinc-300 leading-relaxed mb-4">
          <h5 className="font-bold text-slate-900 dark:text-white uppercase mb-1 font-mono tracking-wider">
            [ DATA POLICY // ÇEREZ İZNİ ]
          </h5>
          <p>
            Ziyaret deneyiminizi analiz etmek ve reklam kişiselleştirmesini optimize etmek adına çerezleri kullanıyoruz. Devam ederek çerez kullanımını onaylamış olursunuz.
          </p>
        </div>
        <div className="flex justify-end gap-3 font-mono">
          <button
            onClick={acceptCookies}
            className="w-full text-center rounded bg-blue-600 dark:bg-blue-500 hover:opacity-90 transition-opacity px-4 py-2 text-[10px] font-bold text-white uppercase tracking-wider"
          >
            [ KABUL ET // ACCEPT ]
          </button>
        </div>
      </div>
    </div>
  );
}
