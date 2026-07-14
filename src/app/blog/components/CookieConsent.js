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
    <div className="fixed bottom-6 left-6 right-6 z-50 max-w-3xl mx-auto animate-fade-in-up">
      <div className="glass-panel rounded-xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-zinc-500/10 bg-background/80 backdrop-blur-md">
        <div className="text-sm text-foreground/80 leading-relaxed text-center md:text-left">
          <p>
            <span className="font-bold text-foreground">Çerez Bildirimi //</span> Sitemizde gezinme deneyiminizi analiz etmek ve AdSense reklamlarını kişiselleştirmek amacıyla çerezler kullanmaktayız. Devam ederek çerez kullanımını kabul etmiş sayılırsınız.{" "}
            <a href="#" className="underline text-accent font-semibold hover:text-foreground transition-colors">[ Detaylar ]</a>
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto shrink-0 justify-center">
          <button
            onClick={acceptCookies}
            className="w-full md:w-auto rounded bg-accent px-5 py-2 text-xs font-mono font-bold text-white hover:opacity-90 transition-opacity"
          >
            [ KABUL ET ]
          </button>
        </div>
      </div>
    </div>
  );
}
