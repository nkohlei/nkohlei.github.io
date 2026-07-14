"use client";

import { useState, useEffect } from "react";

export default function CookieConsent({ lang = "tr" }) {
  const [visible,  setVisible]  = useState(false);
  const [entered,  setEntered]  = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent")) return;
    const t1 = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setEntered(true))
      );
    }, 2000);
    return () => clearTimeout(t1);
  }, []);

  const accept  = () => { setEntered(false); setTimeout(() => { localStorage.setItem("cookie-consent", "accepted");  setVisible(false); }, 400); };
  const decline = () => { setEntered(false); setTimeout(() => { localStorage.setItem("cookie-consent", "declined");  setVisible(false); }, 400); };

  if (!visible) return null;

  const T = {
    tr: {
      title: "Çerez & Veri Politikası",
      sub:   "DATA POLICY",
      body:  "Deneyiminizi geliştirmek ve içerikleri kişiselleştirmek için çerezler kullanıyoruz.",
      accept: "Kabul Et",
      decline: "Reddet",
    },
    en: {
      title: "Cookie & Data Policy",
      sub:   "DATA POLICY",
      body:  "We use cookies to improve your experience and personalise content.",
      accept: "Accept",
      decline: "Decline",
    },
  }[lang] || {};

  return (
    <div
      id="cookie-consent-banner"
      role="dialog"
      aria-live="polite"
      style={{
        position: "fixed", bottom: "24px", left: "24px",
        zIndex: 9000,
        maxWidth: "340px", width: "calc(100vw - 48px)",
        opacity:   entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="glass-modal rounded-2xl p-5">
        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <div
            style={{
              flexShrink: 0, width: "30px", height: "30px",
              borderRadius: "8px", display: "flex",
              alignItems: "center", justifyContent: "center",
              background: "var(--accent-muted)",
              border: "1px solid var(--border-color)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <h5 className="font-semibold text-[12px]" style={{ color: "var(--foreground)" }}>{T.title}</h5>
            <p className="font-mono text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "var(--foreground-subtle)" }}>{T.sub}</p>
          </div>
        </div>
        <p className="text-[11px] leading-relaxed mb-4" style={{ color: "var(--foreground-muted)" }}>{T.body}</p>
        <div className="flex gap-2">
          <button
            id="cookie-accept-btn"
            onClick={accept}
            style={{
              flex: 1, padding: "8px", borderRadius: "8px",
              background: "var(--foreground)", color: "var(--background)",
              border: "none", cursor: "pointer",
              fontSize: "11px", fontWeight: 700,
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >{T.accept}</button>
          <button
            id="cookie-decline-btn"
            onClick={decline}
            style={{
              flex: 1, padding: "8px", borderRadius: "8px",
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--foreground-muted)",
              cursor: "pointer", fontSize: "11px", fontWeight: 600,
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--foreground)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--foreground-muted)"; }}
          >{T.decline}</button>
        </div>
      </div>
    </div>
  );
}
