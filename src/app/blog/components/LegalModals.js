"use client";

import { useEffect, useRef } from "react";

const CONTENT = {
  privacy: {
    title: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
    subtitle: "PRIVACY POLICY",
    sections: [
      {
        heading: { tr: "01. VERİ TOPLAMA VE ÇEREZLER", en: "01. DATA COLLECTION & COOKIES" },
        body: { tr: "Sitemiz, ziyaretçi trafiğini analiz etmek ve Google AdSense gibi üçüncü taraf reklam ortaklarının kişiselleştirilmiş reklamlar sunabilmesi için çerezler kullanmaktadır.", en: "Our site uses cookies to analyse visitor traffic and enable third-party advertising partners such as Google AdSense to deliver personalised advertisements." },
      },
      {
        heading: { tr: "02. ÜÇÜNCÜ TARAF SERVİSLER", en: "02. THIRD-PARTY SERVICES" },
        body: { tr: "Google dahil üçüncü taraf tedarikçiler, kullanıcıların web sitenize yaptığı önceki ziyaretlere dayalı olarak reklam sunmak üzere çerez kullanır.", en: "Third-party vendors including Google use cookies to serve ads based on prior visits to our website and other sites across the internet." },
      },
      {
        heading: { tr: "03. VERİ GÜVENLİĞİ", en: "03. DATA SECURITY" },
        body: { tr: "Toplanan tüm anonim analiz verileri şifrelenmiş protokoller üzerinden iletilir ve saklanır.", en: "All collected anonymous analytics data is transmitted and stored via encrypted protocols." },
      },
    ],
  },
  terms: {
    title: { tr: "Kullanım Şartları", en: "Terms of Service" },
    subtitle: "TERMS OF SERVICE",
    sections: [
      {
        heading: { tr: "01. FİKRİ MÜLKİYET", en: "01. INTELLECTUAL PROPERTY" },
        body: { tr: "Event Horizon bünyesinde yayınlanan tüm makaleler, grafikler ve simülasyon kodları telif hakkıyla korunmaktadır.", en: "All articles, graphics and simulation code published under Event Horizon are protected by copyright." },
      },
      {
        heading: { tr: "02. BİLİMSEL SORUMLULUK REDDİ", en: "02. SCIENTIFIC DISCLAIMER" },
        body: { tr: "Sitede yayınlanan analizler ve simülatörler eğitim amaçlıdır. Ekstrem koşullardaki veriler hayati tavsiye niteliği taşımaz.", en: "Analyses and simulators are for educational purposes only. Data relating to extreme conditions does not constitute life-critical advice." },
      },
      {
        heading: { tr: "03. KULLANIM SINIRLAMALARI", en: "03. USAGE RESTRICTIONS" },
        body: { tr: "Sitenin altyapısına zarar verecek veri kazıma (scraping) ve otomatik saldırı girişimlerinde bulunmak yasaktır.", en: "Data scraping and automated attacks against site infrastructure are strictly prohibited." },
      },
    ],
  },
  contact: {
    title: { tr: "İletişim & Künye", en: "Contact & Masthead" },
    subtitle: "MASTHEAD",
    sections: [
      {
        heading: { tr: "EDİTÖR VE YAYIN SORUMLUSU", en: "EDITOR & PUBLISHER" },
        body: { tr: "N. Kohlei\nE-posta: support@nkohlei.blog\nGitHub: @nkohlei", en: "N. Kohlei\nEmail: support@nkohlei.blog\nGitHub: @nkohlei" },
      },
      {
        heading: { tr: "ALTYAPI", en: "INFRASTRUCTURE" },
        body: { tr: "Bu site Next.js mimarisiyle oluşturulmuş olup Koyeb ağında barındırılmaktadır.", en: "This site is built with Next.js and hosted on the Koyeb network." },
      },
    ],
  },
};

export default function LegalModal({ isOpen, type, onClose, lang = "tr" }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const h = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const doc = CONTENT[type] || CONTENT.privacy;
  const closeLabel = lang === "en" ? "Close" : "Kapat";

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      id="legal-modal-overlay"
      className="animate-fade-in"
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.50)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        role="dialog" aria-modal="true"
        className="glass-modal animate-slide-up rounded-2xl overflow-hidden"
        style={{
          width: "100%", maxWidth: "600px",
          maxHeight: "82vh", display: "flex", flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Top accent stripe */}
        <div style={{ height: "2px", background: "var(--foreground-muted)", opacity: 0.15, flexShrink: 0 }} />

        {/* Header */}
        <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid var(--glass-border)", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
                {doc.subtitle}
              </p>
              <h2 style={{ fontSize: "18px", fontWeight: 800, color: "var(--foreground)", letterSpacing: "-0.03em" }}>
                {doc.title[lang] || doc.title.tr}
              </h2>
            </div>

            {/* X close */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              aria-label="Kapat"
              style={{
                flexShrink: 0, width: "28px", height: "28px",
                borderRadius: "8px", display: "flex",
                alignItems: "center", justifyContent: "center",
                background: "transparent",
                border: "1px solid var(--border-color)",
                color: "var(--foreground-muted)", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--foreground)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--foreground-muted)"; }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="11" y2="11"/><line x1="11" y1="1" x2="1" y2="11"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div style={{ padding: "20px 24px", overflowY: "auto", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {doc.sections.map((s, i) => (
              <div key={i}>
                <h3 className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                  {s.heading[lang] || s.heading.tr}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)", whiteSpace: "pre-line" }}>
                  {s.body[lang] || s.body.tr}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 24px", borderTop: "1px solid var(--glass-border)", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button
            onClick={onClose}
            style={{
              padding: "8px 20px", borderRadius: "8px",
              background: "var(--foreground)", color: "var(--background)",
              border: "none", cursor: "pointer",
              fontSize: "11px", fontWeight: 700,
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.04em", textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
