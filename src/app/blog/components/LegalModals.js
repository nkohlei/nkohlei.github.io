"use client";

import { useEffect, useRef } from "react";

export default function LegalModal({ isOpen, type, onClose }) {
  const overlayRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const content = {
    privacy: {
      title: "Gizlilik Politikası",
      subtitle: "PRIVACY POLICY",
      sections: [
        {
          heading: "01. VERİ TOPLAMA VE ÇEREZLER",
          body: "Sitemiz, ziyaretçi trafiğini analiz etmek ve Google AdSense gibi üçüncü taraf reklam ortaklarının kişiselleştirilmiş reklamlar sunabilmesi için çerezler (cookies) kullanmaktadır. Bu çerezler tarayıcınızda geçici veya kalıcı olarak saklanabilir.",
        },
        {
          heading: "02. ÜÇÜNCÜ TARAF SERVİSLER",
          body: "Google dahil üçüncü taraf tedarikçiler, kullanıcıların web sitenize yaptığı önceki ziyaretlere dayalı olarak reklam sunmak üzere çerez kullanır. Google'ın reklam çerezlerini kullanması, onun ve iş ortaklarının kullanıcılarınıza sitenize ve/veya internetteki diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunmasına olanak tanır.",
        },
        {
          heading: "03. VERİ GÜVENLİĞİ",
          body: "Toplanan tüm anonim analiz verileri şifrelenmiş protokoller üzerinden iletilir ve saklanır. Kullanıcı haklarınızı korumak ana önceliğimizdir.",
        },
      ],
    },
    terms: {
      title: "Kullanım Şartları",
      subtitle: "TERMS OF SERVICE",
      sections: [
        {
          heading: "01. FİKRİ MÜLKİYET VE TELİF HAKKI",
          body: "Event Horizon bünyesinde yayınlanan tüm makaleler, grafikler ve simülasyon kodları telif hakkıyla korunmaktadır. Kaynak gösterilmeksizin ticari amaçlarla kopyalanamaz veya dağıtılamaz.",
        },
        {
          heading: "02. BİLİMSEL SORUMLULUK REDDİ",
          body: "Sitede yayınlanan analizler, simülatörler ve bilimsel teoriler eğitim ve bilgilendirme amaçlıdır. Ekstrem dağcılık veya tıbbi hipoksi gibi konulardaki veriler hayati tavsiye niteliği taşımaz. Uygulamalardaki riskler tamamen kullanıcıya aittir.",
        },
        {
          heading: "03. KULLANIM SINIRLANDIRMALARI",
          body: "Sitenin sunucu altyapısına zarar verecek veri kazıma (scraping) ve benzeri otomatik saldırı girişimlerinde bulunmak yasaktır.",
        },
      ],
    },
    contact: {
      title: "İletişim & Künye",
      subtitle: "MASTHEAD",
      sections: [
        {
          heading: "EDİTÖR VE YAYIN SORUMLUSU",
          body: "N. Kohlei\nE-posta: support@nkohlei.blog\nGitHub: @nkohlei",
        },
        {
          heading: "ALTYAPI VE DESTEK",
          body: "Bu site Next.js mimarisiyle oluşturulmuş olup Koyeb ağında barındırılmaktadır. Teknik destek ve geri bildirim için doğrudan GitHub veya e-posta kanallarıyla iletişime geçebilirsiniz.",
        },
        {
          heading: "PROJE HAKKINDA",
          body: "Event Horizon popüler bilim arşivi, evrenin ve doğanın en ekstrem noktalarını araştıran açık kaynaklı bir yayın projesidir.",
        },
      ],
    },
  };

  if (!isOpen) return null;

  const current = content[type] || { title: "Doküman", subtitle: "", sections: [] };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      id="legal-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "fadeInUp 0.35s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "640px",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--background)",
          border: "1px solid var(--border-color)",
          borderRadius: "16px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* ── Modal Header ── */}
        <div
          style={{
            padding: "24px 24px 20px",
            borderBottom: "1px solid var(--border-color)",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, #7c3aed, #6366f1, #06b6d4)",
            }}
          />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "var(--foreground-muted)" }}
              >
                {current.subtitle}
              </p>
              <h2
                id="modal-title"
                className="text-xl font-black"
                style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
              >
                {current.title}
              </h2>
            </div>

            {/* Close button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              aria-label="Kapat"
              style={{
                flexShrink: 0,
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid var(--border-color)",
                color: "var(--foreground-muted)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239,68,68,0.08)";
                e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
                e.currentTarget.style.color = "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--foreground-muted)";
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="11" y2="11" />
                <line x1="11" y1="1" x2="1" y2="11" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Modal Body (scrollable) ── */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <div className="space-y-6">
            {current.sections.map((section, idx) => (
              <div key={idx}>
                <h3
                  className="font-mono text-[11px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                  style={{ color: "var(--accent)" }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "1px",
                      background: "var(--accent)",
                      opacity: 0.6,
                    }}
                  />
                  {section.heading}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-muted)", whiteSpace: "pre-line" }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Modal Footer ── */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            justifyContent: "flex-end",
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            className="font-mono text-[11px] font-bold uppercase tracking-widest px-5 py-2 rounded-lg transition-all duration-300"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
