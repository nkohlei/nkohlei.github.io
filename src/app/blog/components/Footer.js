"use client";

import { useState } from "react";
import LegalModal from "./LegalModals";
import PartnerLogos from "./PartnerLogos";
import ScrollToTop from "./ScrollToTop";

const LINKS = [
  { id: "privacy", key: "privacy",  tr: "Gizlilik Politikası", en: "Privacy Policy"  },
  { id: "terms",   key: "terms",    tr: "Kullanım Şartları",   en: "Terms of Service" },
  { id: "contact", key: "contact",  tr: "İletişim & Künye",    en: "Contact"          },
];

export default function Footer({ lang = "tr" }) {
  const [modalType, setModalType]   = useState(null);
  const [modalOpen, setModalOpen]   = useState(false);

  const open  = (type) => { setModalType(type); setModalOpen(true); };
  const close = ()     => setModalOpen(false);

  const brand  = "EVENT HORIZON";
  const copy   = lang === "en"
    ? `© ${new Date().getFullYear()} Event Horizon. Independent science archive. All rights reserved.`
    : `© ${new Date().getFullYear()} Event Horizon. Bağımsız popüler bilim arşivi. Tüm hakları saklıdır.`;

  return (
    <>
      {/* Partner logos — lives above the footer divider */}
      <PartnerLogos lang={lang} />

      <footer className="glass-nav transition-theme" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8"
            style={{ borderBottom: "1px solid var(--border-color)" }}>
            {/* Brand */}
            <div>
              <p style={{ fontSize: "15px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)" }}>
                {brand}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "var(--foreground-subtle)" }}>
                OXYPACE APEX ARCHIVES // SCIENCE PORTAL
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-widest"
              style={{ color: "var(--foreground-muted)" }}>
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  id={`footer-${l.id}`}
                  onClick={() => open(l.key)}
                  className="link-underline transition-theme"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "inherit", fontSize: "inherit",
                    color: "inherit", letterSpacing: "inherit", textTransform: "inherit",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                >
                  {lang === "en" ? l.en : l.tr}
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
            style={{ color: "var(--foreground-subtle)", fontSize: "11px", fontFamily: "var(--font-geist-mono), monospace" }}>
            <p className="uppercase tracking-widest">{copy}</p>
            <div className="flex items-center gap-2 uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full inline-block"
                style={{ background: "#22c55e", opacity: 0.8, animation: "ping-soft 2.5s ease-in-out infinite" }} />
              All Systems Operational
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <ScrollToTop />

      {/* Legal modals */}
      <LegalModal isOpen={modalOpen} type={modalType} onClose={close} lang={lang} />
    </>
  );
}
