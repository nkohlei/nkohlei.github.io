"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // 2-second delay before appearing
      const showTimer = setTimeout(() => {
        setVisible(true);
        // small extra tick so CSS transition fires
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setEntered(true));
        });
      }, 2000);
      return () => clearTimeout(showTimer);
    }
  }, []);

  const acceptCookies = () => {
    setEntered(false);
    setTimeout(() => {
      localStorage.setItem("cookie-consent", "accepted");
      setVisible(false);
    }, 400);
  };

  const declineCookies = () => {
    setEntered(false);
    setTimeout(() => {
      localStorage.setItem("cookie-consent", "declined");
      setVisible(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Çerez izni"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9998,
        maxWidth: "360px",
        width: "calc(100vw - 48px)",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        style={{
          background: "rgba(250,249,246,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)",
        }}
        className="dark:[background:rgba(12,13,20,0.92)] dark:[border-color:rgba(255,255,255,0.08)] dark:[box-shadow:0_20px_60px_rgba(0,0,0,0.5)]"
      >
        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <div
            style={{
              flexShrink: 0,
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(99,102,241,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h5
              className="font-mono font-bold uppercase tracking-wider text-[11px]"
              style={{ color: "#0D0E12" }}
            >
              Çerez & Veri Politikası
            </h5>
            <p className="text-[10px] font-mono mt-0.5" style={{ color: "#6b7280" }}>
              DATA POLICY // COOKIE CONSENT
            </p>
          </div>
        </div>

        {/* Body */}
        <p
          className="text-[11px] leading-relaxed mb-4"
          style={{ color: "#374151" }}
        >
          Deneyiminizi geliştirmek ve reklamları kişiselleştirmek için çerezler
          kullanıyoruz. Kabul ederek çerez politikamıza onay vermiş olursunuz.
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            id="cookie-accept-btn"
            onClick={acceptCookies}
            className="flex-1 font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg py-2 transition-all duration-300"
            style={{
              background: "#6366f1",
              color: "#ffffff",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#4f46e5"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#6366f1"; }}
          >
            Kabul Et
          </button>
          <button
            id="cookie-decline-btn"
            onClick={declineCookies}
            className="flex-1 font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg py-2 transition-all duration-300"
            style={{
              background: "transparent",
              color: "#6b7280",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)"; e.currentTarget.style.color = "#374151"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.color = "#6b7280"; }}
          >
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
}
