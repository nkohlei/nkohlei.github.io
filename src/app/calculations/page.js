"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Header from "../blog/components/Header";
import Footer from "../blog/components/Footer";
import ReadingProgressBar from "../blog/components/ReadingProgressBar";
import CookieConsent from "../blog/components/CookieConsent";

/* ════════════════════════════════════════════════════════════
   ATMOSPHERIC SVG VISUALISER
════════════════════════════════════════════════════════════ */
function AtmosphericVisualiser({ altitude, isDeathZone, lang }) {
  const MAX  = 12000;
  const frac = altitude / MAX; // 0..1
  const SVG_H = 280;
  const lineY  = SVG_H - frac * SVG_H;         // SVG top=0 is top

  /* Layer colours */
  const layers = [
    { y: 0,    h: SVG_H * 0.08, fill: "#1a0536", label: lang === "en" ? "Exosphere" : "Ekzosfer",  alt: "500+ km" },
    { y: SVG_H * 0.08, h: SVG_H * 0.16, fill: "#0a1a45", label: lang === "en" ? "Thermosphere" : "Termosfer", alt: "80–500 km" },
    { y: SVG_H * 0.24, h: SVG_H * 0.14, fill: "#0c2a5e", label: lang === "en" ? "Mesosphere" : "Mezosfer", alt: "50–80 km" },
    { y: SVG_H * 0.38, h: SVG_H * 0.20, fill: "#1a3f7a", label: lang === "en" ? "Stratosphere" : "Stratosfer", alt: "12–50 km" },
    { y: SVG_H * 0.58, h: SVG_H * 0.42, fill: "#1e5095", label: lang === "en" ? "Troposphere" : "Troposfer", alt: "0–12 km" },
  ];

  const o2 = (20.9 * Math.exp(-altitude / 8200)).toFixed(2);
  const pressure = (101.325 * Math.exp(-altitude / 8200)).toFixed(1);

  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "stretch", flexWrap: "wrap" }}>
      {/* SVG atmosphere column */}
      <div style={{ flex: "0 0 auto" }}>
        <svg width="80" height={SVG_H} viewBox={`0 0 80 ${SVG_H}`} style={{ borderRadius: "8px", overflow: "hidden" }}>
          {/* Atmosphere layers */}
          {layers.map((l, i) => (
            <rect key={i} x={0} y={l.y} width={80} height={l.h} fill={l.fill} />
          ))}

          {/* Death zone highlight */}
          {isDeathZone && (
            <rect
              x={0} y={lineY} width={80}
              height={SVG_H - lineY}
              fill="rgba(239,68,68,0.18)"
              style={{ animation: "death-blink 1s ease-in-out infinite" }}
            />
          )}

          {/* Altitude line */}
          <line
            x1={0} y1={lineY} x2={80} y2={lineY}
            stroke={isDeathZone ? "#ef4444" : "rgba(255,255,255,0.9)"}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            style={{ transition: "y1 0.4s ease, y2 0.4s ease" }}
          />

          {/* Altitude label on line */}
          <rect x={4} y={lineY - 14} width={46} height={13} rx={3} fill="rgba(0,0,0,0.6)" />
          <text x={8} y={lineY - 4}
            fill={isDeathZone ? "#ef4444" : "#fff"}
            fontSize="8" fontFamily="monospace" fontWeight="700"
          >
            {altitude.toLocaleString()} m
          </text>

          {/* 8000m death zone marker */}
          <line x1={0} y1={SVG_H - (8000 / MAX) * SVG_H} x2={80} y2={SVG_H - (8000 / MAX) * SVG_H}
            stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <text x={4} y={SVG_H - (8000 / MAX) * SVG_H - 3}
            fill="#ef4444" fontSize="6.5" fontFamily="monospace">8000m</text>
        </svg>
      </div>

      {/* Stats column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", minWidth: "160px" }}>
        {/* O2 */}
        <div className="cockpit-panel" style={{ padding: "14px 16px" }}>
          <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
            {lang === "en" ? "Effective O₂" : "Efektif O₂"}
          </p>
          <p style={{
            fontSize: "28px", fontWeight: 900, letterSpacing: "-0.05em",
            color: isDeathZone ? "#ef4444" : "var(--foreground)",
            transition: "color 0.5s ease",
          }}>
            {o2}%
          </p>
          {/* O2 bar */}
          <div style={{ height: "3px", background: "var(--glass-border)", borderRadius: "2px", marginTop: "8px" }}>
            <div style={{
              height: "100%", borderRadius: "2px",
              width: `${(parseFloat(o2) / 20.9) * 100}%`,
              background: isDeathZone ? "#ef4444" : "var(--foreground)",
              transition: "width 0.4s ease, background 0.4s ease",
            }} />
          </div>
          <p className="font-mono text-[9px] mt-1" style={{ color: "var(--foreground-subtle)" }}>
            {lang === "en" ? "Sea level: 20.9%" : "Deniz sev.: 20.9%"}
          </p>
        </div>

        {/* Pressure */}
        <div className="cockpit-panel" style={{ padding: "14px 16px" }}>
          <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
            {lang === "en" ? "Atm. Pressure" : "Atm. Basıncı"}
          </p>
          <p style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--foreground)" }}>
            {pressure}
          </p>
          <p className="font-mono text-[9px]" style={{ color: "var(--foreground-subtle)" }}>kPa</p>
        </div>

        {/* Status */}
        {isDeathZone ? (
          <div
            className="cockpit-panel animate-death-blink"
            style={{ padding: "12px 16px", borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)" }}
          >
            <p className="font-mono text-[11px] font-black uppercase tracking-wider" style={{ color: "#ef4444" }}>
              ☠️ DEATH ZONE
            </p>
            <p className="font-mono text-[9px] mt-1" style={{ color: "rgba(239,68,68,0.7)" }}>
              {lang === "en" ? "Hypoxia critical. Cell breakdown active." : "Hipoksi kritik. Hücresel bozunma aktif."}
            </p>
          </div>
        ) : (
          <div className="cockpit-panel" style={{ padding: "12px 16px" }}>
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: "#22c55e" }}>
              ✓ {lang === "en" ? "Life Support Stable" : "Yaşam Destek Stabil"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ATMOSPHERIC HYPOXIA MODULE
════════════════════════════════════════════════════════════ */
function AtmosphericModule({ lang }) {
  const [altitude, setAltitude] = useState(4500);
  const isDeathZone = altitude >= 8000;

  const headings = {
    tr: { title: "[ 01 ] ATMOSFERİK HİPOKSİ KONTROL MERKEZİ", sub: "İrtifa değiştikçe atmosfer katmanları ve O₂ etkisi canlı güncellenir." },
    en: { title: "[ 01 ] ATMOSPHERIC HYPOXIA CONTROLLER",     sub: "Atmospheric layers and O₂ levels update live as altitude changes." },
  };
  const H = headings[lang] || headings.tr;

  return (
    <div className="cockpit-panel p-6 md:p-8">
      <h3 className="font-mono text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: "var(--foreground)" }}>
        {H.title}
      </h3>
      <p className="font-mono text-[10px] mb-6" style={{ color: "var(--foreground-subtle)" }}>{H.sub}</p>

      {/* Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--foreground-muted)" }}>
            {lang === "en" ? "Altitude" : "İrtifa"}
          </span>
          <span style={{
            fontSize: "18px", fontWeight: 900, letterSpacing: "-0.04em",
            color: isDeathZone ? "#ef4444" : "var(--foreground)",
            transition: "color 0.4s ease",
          }}>
            {altitude.toLocaleString()} m
          </span>
        </div>
        <input
          id="altitude-slider"
          type="range" min={0} max={12000} step={50}
          value={altitude}
          onChange={(e) => setAltitude(+e.target.value)}
          className="slider-altitude"
          style={{
            background: isDeathZone
              ? `linear-gradient(90deg,#ef4444 ${(altitude/12000)*100}%,var(--glass-border) ${(altitude/12000)*100}%)`
              : `linear-gradient(90deg,var(--foreground-muted) ${(altitude/12000)*100}%,var(--glass-border) ${(altitude/12000)*100}%)`,
          }}
        />
        <div className="flex justify-between font-mono text-[9px] mt-1" style={{ color: "var(--foreground-subtle)" }}>
          <span>{lang === "en" ? "0 m (Sea Level)" : "0 m (Deniz Seviyesi)"}</span>
          <span style={{ color: "#ef4444" }}>{lang === "en" ? "12,000 m (Apex)" : "12.000 m (Apex)"}</span>
        </div>
      </div>

      {/* Visualiser */}
      <AtmosphericVisualiser altitude={altitude} isDeathZone={isDeathZone} lang={lang} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   3D BLACK HOLE CSS SIMULATION
════════════════════════════════════════════════════════════ */
function BlackHoleSim({ distance, rs = 10 }) {
  /* Sizes — when distance approaches rs, accretion disk grows */
  const proximity = 1 - Math.min(1, (distance - rs) / 90); // 0 = far, 1 = near
  const holeR    = 60 + proximity * 40;                     // 60–100px
  const ringR    = holeR + 20 + proximity * 40;

  return (
    <div style={{
      position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      width: "220px", height: "220px",
      flexShrink: 0,
    }}>
      {/* Warp rings */}
      {[1.8, 1.5, 1.25, 1.08].map((scale, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${ringR * scale * 2}px`,
          height: `${ringR * scale * 0.35}px`,
          borderRadius: "50%",
          border: `${0.8 - i * 0.15}px solid rgba(255,255,255,${0.07 - i * 0.015})`,
          animation: `warp-drift ${8 + i * 3}s linear infinite${i % 2 === 1 ? " reverse" : ""}`,
          transform: `rotateX(75deg)`,
        }} />
      ))}

      {/* Accretion disk */}
      <div style={{
        position: "absolute",
        width: `${ringR * 2}px`,
        height: `${ringR * 0.3}px`,
        borderRadius: "50%",
        background: `radial-gradient(ellipse at center,
          rgba(${200 + Math.round(proximity*55)},${Math.round(120 - proximity*80)},20,0.9) 0%,
          rgba(200,80,20,0.5) 40%,
          transparent 70%)`,
        transform: "rotateX(70deg)",
        transition: "all 0.5s ease",
        filter: "blur(1px)",
      }} />

      {/* Black hole sphere */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: `${holeR * 2}px`,
        height: `${holeR * 2}px`,
        borderRadius: "50%",
        background: "radial-gradient(ellipse at 35% 35%, rgba(30,30,40,0.3) 0%, #000 60%)",
        boxShadow: `0 0 ${20 + proximity*40}px rgba(0,0,0,0.8), inset 0 0 ${holeR}px rgba(0,0,0,0.95)`,
        transition: "width 0.5s ease, height 0.5s ease, box-shadow 0.5s ease",
      }} />

      {/* Photon sphere ring */}
      <div style={{
        position: "absolute", zIndex: 11,
        width: `${holeR * 2 + 8}px`,
        height: `${holeR * 2 + 8}px`,
        borderRadius: "50%",
        border: `1px solid rgba(255,200,100,${0.2 + proximity * 0.35})`,
        transition: "all 0.5s ease",
      }} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   TIME DILATION MODULE
════════════════════════════════════════════════════════════ */
function TimeDilationModule({ lang }) {
  const [distance, setDistance] = useState(35);
  const rs = 10;
  const isExtreme = distance <= 13;

  let factor = 1;
  if (distance > rs) factor = 1 / Math.sqrt(1 - rs / distance);
  else factor = Infinity;

  const fmt = (f) => {
    if (!isFinite(f)) return lang === "en" ? "∞  EVENT HORIZON" : "∞  OLAY UFKU";
    if (f > 3600) return `${(f/3600).toFixed(3)} ${lang === "en" ? "HOURS" : "SAAT"}`;
    if (f > 60)   return `${(f/60).toFixed(3)}  ${lang === "en" ? "MIN" : "DAK"}`;
    return `${f.toFixed(4)} ${lang === "en" ? "SEC" : "SAN"}`;
  };

  const H = {
    tr: { title: "[ 02 ] SCHWARZSCHILD ZAMAN DİLATASYONU", sub: "Kara deliğe yaklaştıkça zamanın nasıl gerildiğini gözlemle." },
    en: { title: "[ 02 ] SCHWARZSCHILD TIME DILATOR",        sub: "Observe how time stretches as you approach the event horizon." },
  }[lang] || {};

  return (
    <div className="cockpit-panel p-6 md:p-8">
      <h3 className="font-mono text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: "var(--foreground)" }}>
        {H.title}
      </h3>
      <p className="font-mono text-[10px] mb-6" style={{ color: "var(--foreground-subtle)" }}>{H.sub}</p>

      {/* Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--foreground-muted)" }}>
            {lang === "en" ? "Radial Distance" : "Radyal Uzaklık"}
          </span>
          <span style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--foreground)" }}>
            {distance} km
          </span>
        </div>
        <input
          id="dilation-slider"
          type="range" min={11} max={100} step={1}
          value={distance}
          onChange={(e) => setDistance(+e.target.value)}
          className="slider-dilation"
          style={{
            background: `linear-gradient(90deg,var(--accent) ${((distance-11)/89)*100}%,var(--glass-border) ${((distance-11)/89)*100}%)`,
          }}
        />
        <div className="flex justify-between font-mono text-[9px] mt-1" style={{ color: "var(--foreground-subtle)" }}>
          <span style={{ color: "#ef4444" }}>11 km ({lang === "en" ? "Event Horizon" : "Olay Ufku"})</span>
          <span>100 km ({lang === "en" ? "Flat Space" : "Düz Uzay"})</span>
        </div>
      </div>

      {/* Layout: BH sim + stats */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
        {/* CSS 3D Black Hole */}
        <BlackHoleSim distance={distance} rs={rs} />

        {/* Stats */}
        <div style={{ flex: 1, minWidth: "160px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Formula */}
          <div className="cockpit-panel" style={{ padding: "12px 14px" }}>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
              Formula
            </p>
            <code style={{ fontSize: "11px", color: "var(--accent)", fontFamily: "monospace" }}>
              t = t₀ / √(1 − rₛ/r)
            </code>
          </div>

          {/* Result */}
          <div className="cockpit-panel" style={{ padding: "12px 14px" }}>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
              {lang === "en" ? "1 sec on shuttle = Earth:" : "Mekikte 1 sn = Dünya:"}
            </p>
            <p style={{
              fontSize: "clamp(1rem,3vw,1.5rem)", fontWeight: 900,
              letterSpacing: "-0.04em", wordBreak: "break-all",
              color: isExtreme ? "#a78bfa" : "var(--foreground)",
              transition: "color 0.5s ease",
            }}>
              {fmt(factor)}
            </p>
          </div>

          {/* Factor */}
          <div className="cockpit-panel" style={{ padding: "12px 14px" }}>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "var(--foreground-subtle)" }}>
              {lang === "en" ? "Dilation Factor" : "Dilatasyon Faktörü"}
            </p>
            <p style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--foreground)" }}>
              ×{isFinite(factor) ? factor.toFixed(4) : "∞"}
            </p>
          </div>

          {/* Status */}
          {isExtreme ? (
            <div className="cockpit-panel" style={{ padding: "10px 14px", borderColor: "rgba(167,139,250,0.25)", background: "rgba(139,92,246,0.05)" }}>
              <p className="font-mono text-[10px] font-black uppercase tracking-wider" style={{ color: "#a78bfa" }}>
                ⚠ {lang === "en" ? "TIME NEAR STANDSTILL" : "ZAMAN NEREDEYSE DURDU"}
              </p>
            </div>
          ) : (
            <div className="cockpit-panel" style={{ padding: "10px 14px" }}>
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: "#22c55e" }}>
                ✓ {lang === "en" ? "Orbit Stable" : "Yörünge Stabil"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════ */
export default function CalculationsPage() {
  const [lang, setLang] = useState("tr");

  const PAGE = {
    tr: {
      badge: "RESEARCH APEX // INTERACTIVE PHYSICS",
      title: "Analiz &\nHesaplama",
      sub: "Atmosferik hipoksi ve kara delik zaman dilatasyonunu interaktif simülatörlerle keşfet.",
    },
    en: {
      badge: "RESEARCH APEX // INTERACTIVE PHYSICS",
      title: "Analysis &\nCalculations",
      sub: "Explore atmospheric hypoxia and black hole time dilation with interactive simulators.",
    },
  }[lang];

  return (
    <div className="min-h-screen transition-theme" style={{ color: "var(--foreground)" }}>
      <ReadingProgressBar />
      <Header isArticle={false} lang={lang} onLangChange={setLang} />

      {/* Hero */}
      <section
        className="py-20 animate-fade-in-up"
        style={{ borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="inline-flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ border: "1px solid var(--border-color)", background: "var(--glass-bg)", color: "var(--foreground-muted)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full inline-block" style={{ background: "var(--foreground-subtle)" }} />
            {PAGE.badge}
          </div>
          <h1
            className="font-black uppercase animate-fade-in-up-delay-1"
            style={{
              fontSize: "clamp(2.5rem,7vw,5rem)",
              letterSpacing: "-0.05em",
              color: "var(--foreground)",
              lineHeight: 0.95,
              whiteSpace: "pre-line",
            }}
          >
            {PAGE.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed max-w-2xl animate-fade-in-up-delay-2"
            style={{ color: "var(--foreground-muted)" }}>
            {PAGE.sub}
          </p>
        </div>
      </section>

      {/* Simulators */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AtmosphericModule lang={lang} />
          <TimeDilationModule lang={lang} />
        </div>

        {/* Back link */}
        <div className="mt-12">
          <a
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-widest transition-theme"
            style={{ color: "var(--foreground-muted)", textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--foreground)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
          >
            ← {lang === "en" ? "Back to Archive" : "Arşive Geri Dön"}
          </a>
        </div>
      </main>

      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
