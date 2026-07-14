"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────────────────
   SVG CIRCULAR PROGRESS RING
   radius=40, circumference=2π*40≈251.3
────────────────────────────────────────────────────────────── */
function OxygenRing({ percentage, isDeathZone }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const fraction = Math.max(0, Math.min(parseFloat(percentage) / 20.9, 1));
  const strokeDashoffset = circumference * (1 - fraction);

  const ringColor = isDeathZone
    ? "#ef4444"
    : fraction > 0.6
    ? "#10b981"
    : fraction > 0.35
    ? "#f59e0b"
    : "#ef4444";

  const glowColor = isDeathZone ? "rgba(239,68,68,0.5)" : "rgba(16,185,129,0.4)";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100" className="rotate-[-90deg]">
          {/* Background track */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="7"
          />
          {/* Animated fill arc */}
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 0.5s cubic-bezier(0.16,1,0.3,1), stroke 0.5s ease",
              filter: `drop-shadow(0 0 6px ${glowColor})`,
            }}
          />
        </svg>
        {/* Center text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ color: isDeathZone ? "#ef4444" : "#f5f5f7" }}
        >
          <span className="text-lg font-black font-sans leading-none" style={{ letterSpacing: "-0.04em" }}>
            {percentage}%
          </span>
          <span className="text-[9px] font-mono uppercase tracking-widest mt-0.5" style={{ color: "#71717a" }}>
            O₂
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN SIMULATOR WIDGET
────────────────────────────────────────────────────────────── */
export default function SimulatorWidget() {
  const [altitude, setAltitude] = useState(8848);
  const [distance, setDistance] = useState(25);
  const rs = 10; // Schwarzschild radius in km

  /* ── O₂ calculation ── */
  const o2Percentage = (20.9 * Math.exp(-altitude / 8200)).toFixed(2);
  const isDeathZone = altitude >= 8000;

  /* ── Time dilation ── */
  let dilationFactor = 1;
  if (distance > rs) {
    dilationFactor = 1 / Math.sqrt(1 - rs / distance);
  } else {
    dilationFactor = Infinity;
  }

  const formatDilation = (factor) => {
    if (!isFinite(factor)) return "∞  CRITICAL: EVENT HORIZON";
    if (factor > 3600) return `${(factor / 3600).toFixed(2)} SAAT`;
    if (factor > 60) return `${(factor / 60).toFixed(2)} DAKİKA`;
    return `${factor.toFixed(3)} SANİYE`;
  };

  const dilationLabel = formatDilation(dilationFactor);
  const isExtreme = distance <= 12;

  return (
    <div
      className="rounded-xl p-6 md:p-8 font-mono text-xs w-full relative overflow-hidden"
      style={{
        background: "var(--panel-bg)",
        border: "1px solid var(--border-color)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Subtle top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(6,182,212,0.3), transparent)" }}
      />

      {/* ── Header ── */}
      <div
        className="flex items-center justify-between pb-4 mb-6"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <div>
          <h3
            className="text-sm font-extrabold uppercase tracking-widest flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <span
              className="h-2 w-2 rounded-full bg-indigo-500 inline-block"
              style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)", animation: "glow-pulse 2s ease-in-out infinite" }}
            />
            APEX FLIGHT COMPUTER
          </h3>
          <p className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "var(--foreground-muted)" }}>
            İnteraktif Atmosferik & Relativistik Modelleme Terminali
          </p>
        </div>
        <span
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest font-mono"
          style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#10b981" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" style={{ animation: "glow-pulse 1.5s ease-in-out infinite" }} />
          LIVE
        </span>
      </div>

      {/* ── Two Modules ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ════════════════════════════════════════
            MODULE 01: ATMOSPHERIC HYPOXIA
        ════════════════════════════════════════ */}
        <div
          className="relative rounded-lg p-5 overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.03)",
            border: "1px solid var(--border-color)",
          }}
        >
          {/* Module label */}
          <div className="flex items-center justify-between mb-4">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-wider"
              style={{ color: "var(--foreground)" }}
            >
              [ 01 ] ATMOSPHERIC HYPOXIA CONTROLLER
            </h4>
          </div>

          {/* ── Slider ── */}
          <div className="space-y-2 mb-5">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--foreground-muted)" }}>
                Yükseklik (Altitude)
              </span>
              <span
                className="text-base font-black font-sans"
                style={{
                  letterSpacing: "-0.04em",
                  color: isDeathZone ? "#ef4444" : "#6366f1",
                  transition: "color 0.5s ease",
                  textShadow: isDeathZone ? "0 0 12px rgba(239,68,68,0.5)" : "0 0 12px rgba(99,102,241,0.4)",
                }}
              >
                {altitude.toLocaleString()} m
              </span>
            </div>
            <input
              id="altitude-slider"
              type="range"
              min="0"
              max="12000"
              step="50"
              value={altitude}
              onChange={(e) => setAltitude(parseInt(e.target.value))}
              className="slider-altitude"
              style={{
                background: isDeathZone
                  ? `linear-gradient(90deg, #ef4444 ${(altitude / 12000) * 100}%, rgba(255,255,255,0.08) ${(altitude / 12000) * 100}%)`
                  : `linear-gradient(90deg, #6366f1 ${(altitude / 12000) * 100}%, rgba(255,255,255,0.08) ${(altitude / 12000) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-[9px]" style={{ color: "var(--foreground-muted)" }}>
              <span>0 m (Deniz Seviyesi)</span>
              <span className="text-red-500 font-bold">12.000 m (Ölüm Bölgesi Apex)</span>
            </div>
          </div>

          {/* ── Cockpit display panel ── */}
          <div
            className="cockpit-input-wrapper p-4 rounded-lg"
          >
            <div className="flex items-center justify-between gap-4">
              {/* O2 ring */}
              <OxygenRing percentage={o2Percentage} isDeathZone={isDeathZone} />

              {/* Stats */}
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-muted)" }}>
                    Efektif O₂ Seviyesi
                  </p>
                  <p
                    className="text-2xl font-black font-sans"
                    style={{
                      letterSpacing: "-0.04em",
                      color: isDeathZone ? "#ef4444" : "#f5f5f7",
                      transition: "color 0.5s ease",
                    }}
                  >
                    {o2Percentage}%
                  </p>
                  <p className="text-[9px] mt-0.5" style={{ color: "var(--foreground-muted)" }}>
                    (Deniz sev.: 20.9%)
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-muted)" }}>
                    Atmosfer Basıncı
                  </p>
                  <p className="text-sm font-bold font-sans" style={{ color: "#f5f5f7", letterSpacing: "-0.02em" }}>
                    {(101.325 * Math.exp(-altitude / 8200)).toFixed(1)} kPa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Death zone warning ── */}
          {isDeathZone && (
            <div
              className="mt-4 rounded-lg px-4 py-3 text-center animate-death-zone"
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.35)",
              }}
            >
              <p
                className="text-[11px] font-black uppercase tracking-widest"
                style={{ color: "#ef4444", textShadow: "0 0 12px rgba(239,68,68,0.6)" }}
              >
                ☠️ DEATH ZONE — HİPOKSİ BAŞLADI
              </p>
              <p className="text-[9px] mt-1" style={{ color: "rgba(239,68,68,0.7)" }}>
                İnsan vücudu kendini yenileyemez. Hücresel bozunma aktif.
              </p>
            </div>
          )}
          {!isDeathZone && (
            <div
              className="mt-4 rounded-lg px-4 py-2.5 text-center"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#10b981" }}
              >
                ✓ YAŞAM DESTEK SİSTEMİ STABIL
              </p>
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════
            MODULE 02: TIME DILATION
        ════════════════════════════════════════ */}
        <div
          className="relative rounded-lg p-5 overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.03)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className="text-[11px] font-extrabold uppercase tracking-wider"
              style={{ color: "var(--foreground)" }}
            >
              [ 02 ] SCHWARZSCHILD TIME DILATOR
            </h4>
          </div>

          {/* ── Slider ── */}
          <div className="space-y-2 mb-5">
            <div className="flex justify-between items-baseline">
              <span className="text-[10px] uppercase tracking-wider" style={{ color: "var(--foreground-muted)" }}>
                Radyal Uzaklık
              </span>
              <span
                className="text-base font-black font-sans"
                style={{
                  letterSpacing: "-0.04em",
                  color: "#0ea5e9",
                  textShadow: "0 0 12px rgba(14,165,233,0.5)",
                }}
              >
                {distance} km
              </span>
            </div>
            <input
              id="dilation-slider"
              type="range"
              min="11"
              max="100"
              step="1"
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
              className="slider-dilation"
              style={{
                background: `linear-gradient(90deg, #a855f7 ${((distance - 11) / 89) * 100}%, rgba(255,255,255,0.08) ${((distance - 11) / 89) * 100}%)`,
              }}
            />
            <div className="flex justify-between text-[9px]" style={{ color: "var(--foreground-muted)" }}>
              <span className="text-red-500 font-bold">11 km (Event Horizon)</span>
              <span>100 km (Düz Uzay)</span>
            </div>
          </div>

          {/* ── Formula display panel ── */}
          <div className="cockpit-input-wrapper p-5 rounded-lg space-y-4">
            {/* Formula */}
            <div>
              <p className="text-[9px] uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>
                Schwarzschild Formülü
              </p>
              <div
                className="font-mono text-[11px] px-3 py-2 rounded"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#a5b4fc" }}
              >
                t_earth = t_orbit / √(1 − r_s/r)
              </div>
            </div>

            {/* Result */}
            <div>
              <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-muted)" }}>
                Mekik'te 1 saniye = Dünya'da
              </p>
              <p
                className="font-black font-sans leading-none"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                  letterSpacing: "-0.04em",
                  color: isExtreme ? "#a78bfa" : "#f5f5f7",
                  textShadow: isExtreme ? "0 0 20px rgba(167,139,250,0.5)" : "none",
                  transition: "color 0.5s ease, text-shadow 0.5s ease",
                  wordBreak: "break-all",
                }}
              >
                {dilationLabel}
              </p>
            </div>

            {/* Dilation factor */}
            <div>
              <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-muted)" }}>
                Dilatation Faktörü
              </p>
              <p
                className="text-lg font-black font-sans"
                style={{
                  letterSpacing: "-0.03em",
                  color: "#0ea5e9",
                  textShadow: "0 0 10px rgba(14,165,233,0.4)",
                }}
              >
                ×{isFinite(dilationFactor) ? dilationFactor.toFixed(4) : "∞"}
              </p>
            </div>
          </div>

          {/* ── Status ── */}
          {isExtreme ? (
            <div
              className="mt-4 rounded-lg px-4 py-3 text-center"
              style={{
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.3)",
                animation: "glow-pulse 1.8s ease-in-out infinite",
              }}
            >
              <p
                className="text-[11px] font-black uppercase tracking-widest"
                style={{ color: "#a78bfa", textShadow: "0 0 12px rgba(167,139,250,0.5)" }}
              >
                ⚠ YERÇEK. KRİTİK // ZAMAN YAVAŞLIYOR
              </p>
            </div>
          ) : (
            <div
              className="mt-4 rounded-lg px-4 py-2.5 text-center"
              style={{
                background: "rgba(14,165,233,0.06)",
                border: "1px solid rgba(14,165,233,0.15)",
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#0ea5e9" }}
              >
                ✓ RELATİVİSTİK YÖRÜNGE STABİL
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
