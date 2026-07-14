"use client";

import { useState } from "react";
import LegalModal from "./LegalModals";

export default function Footer() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const links = [
    { id: "privacy-link", label: "Gizlilik Politikası", type: "privacy" },
    { id: "terms-link", label: "Kullanım Şartları", type: "terms" },
    { id: "contact-link", label: "İletişim & Künye", type: "contact" },
  ];

  return (
    <>
      <footer
        style={{
          borderTop: "1px solid var(--border-color)",
          background: "var(--panel-bg)",
          backdropFilter: "blur(8px)",
          padding: "48px 0 32px",
          fontFamily: "var(--font-geist-mono), monospace",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Top row ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8" style={{ borderBottom: "1px solid var(--border-color)" }}>
            {/* Brand */}
            <div>
              <p
                className="text-lg font-black tracking-tighter mb-1"
                style={{ color: "var(--foreground)", letterSpacing: "-0.04em" }}
              >
                EVENT HORIZON
              </p>
              <p
                className="text-[10px] uppercase tracking-widest"
                style={{ color: "var(--foreground-muted)" }}
              >
                OXYPACE APEX ARCHIVES // SCIENCE PORTAL
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex items-center gap-6 text-[11px] uppercase tracking-widest" style={{ color: "var(--foreground-muted)" }}>
              {links.map((link) => (
                <button
                  key={link.id}
                  id={link.id}
                  onClick={() => openModal(link.type)}
                  className="link-underline transition-colors duration-300 hover:text-[color:var(--foreground)] focus:outline-none"
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", textTransform: "inherit" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Bottom row ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[10px]" style={{ color: "var(--foreground-muted)" }}>
            <p className="uppercase tracking-widest">
              © {new Date().getFullYear()} EVENT HORIZON. Bağımsız bilimsel popüler arşiv.
            </p>
            <div className="flex items-center gap-2">
              {/* Live indicator */}
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block"
                style={{ boxShadow: "0 0 6px rgba(52,211,153,0.6)", animation: "glow-pulse 2s ease-in-out infinite" }}
              />
              <span className="uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
