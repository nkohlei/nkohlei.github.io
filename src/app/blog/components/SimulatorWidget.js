"use client";

import { useState } from "react";

export default function SimulatorWidget() {
  // Altitude states
  const [altitude, setAltitude] = useState(8848);
  // Time dilation states
  const [distance, setDistance] = useState(15); // Distance to black hole center in km
  const rs = 10; // Schwarzschild radius in km

  // O2 calculation: O2% = 20.9 * e^(-h / 8200)
  const o2Percentage = (20.9 * Math.exp(-altitude / 8200)).toFixed(2);
  const isDeathZone = altitude >= 8000;

  // Time dilation calculation: t_earth = t_orbit / sqrt(1 - rs / r)
  // Let's compute the factor: 1 / sqrt(1 - rs / r)
  let dilationFactor = 1;
  if (distance > rs) {
    dilationFactor = 1 / Math.sqrt(1 - rs / distance);
  } else {
    dilationFactor = Infinity;
  }

  const formatDilation = (factor) => {
    if (factor === Infinity) return "Sonsuz Zaman Yavaşlaması (Olay Ufku)";
    if (factor > 3600) return `${(factor / 3600).toFixed(2)} saat`;
    if (factor > 60) return `${(factor / 60).toFixed(2)} dakika`;
    return `${factor.toFixed(2)} saniye`;
  };

  return (
    <div className="glass-panel rounded-lg p-6 font-mono text-xs border border-white/5 bg-zinc-950/20 text-foreground w-full">
      <div className="border-b border-white/5 pb-3 mb-6">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-widest flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          KOZMİK SİMÜLATÖR // COSMIC SIMULATOR
        </h3>
        <p className="text-[10px] text-zinc-500 uppercase mt-1">İnteraktif Fizik ve İrtifa Modelleme Modülü</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Module 1: Altitude O2 Simulator */}
        <div className="space-y-4">
          <h4 className="font-bold text-foreground border-b border-white/5 pb-2 text-[11px] uppercase tracking-wider">
            [ 01 // İRTİFA OKSİJEN SİMÜLASYONU ]
          </h4>
          <div>
            <label className="block text-zinc-400 mb-2">İrtifa Yüksekliği (Metre):</label>
            <input
              type="number"
              min="0"
              max="15000"
              value={altitude}
              onChange={(e) => setAltitude(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full bg-zinc-900/50 border border-white/10 rounded px-3 py-2 text-foreground font-bold focus:outline-none focus:border-accent"
            />
          </div>
          <div className="bg-background/40 p-4 rounded border border-white/5 space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-500">Atmosferik O2 Oranı:</span>
              <span className="font-bold text-foreground font-sans">{o2Percentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Deniz Seviyesi Oranı:</span>
              <span className="font-bold text-zinc-400">20.90%</span>
            </div>
            {isDeathZone ? (
              <div className="mt-3 text-center py-1.5 rounded bg-red-950/20 border border-red-500/30 text-red-400 font-bold text-[10px] animate-pulse">
                !!! UYARI: ÖLÜM BÖLGESİ (DEATH ZONE) !!!
              </div>
            ) : (
              <div className="mt-3 text-center py-1.5 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                GÜVENLİ LİMİTLER
              </div>
            )}
          </div>
        </div>

        {/* Module 2: Einstein Gravitational Time Dilation */}
        <div className="space-y-4">
          <h4 className="font-bold text-foreground border-b border-white/5 pb-2 text-[11px] uppercase tracking-wider">
            [ 02 // EINSTEIN ZAMAN DİLATASYONU ]
          </h4>
          <div>
            <label className="block text-zinc-400 mb-2">
              Kara Delik Merkezine Uzaklık (km): <span className="text-accent font-bold font-sans">{distance} km</span>
            </label>
            <input
              type="range"
              min="11"
              max="100"
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[9px] text-zinc-600 mt-1">
              <span>11 km (Sınıra Yakın)</span>
              <span>100 km (Uzak)</span>
            </div>
          </div>
          <div className="bg-background/40 p-4 rounded border border-white/5 space-y-2">
            <div className="text-[10px] text-zinc-500 mb-2">
              Schwarzschild Olay Ufku yarıçapı 10 km olan bir kara deliğin yörüngesinde:
            </div>
            <div className="flex justify-between border-t border-white/5 pt-2">
              <span className="text-zinc-500">Kara Delikte 1 Saniye:</span>
              <span className="font-bold text-accent font-sans">
                {formatDilation(dilationFactor)}
              </span>
            </div>
            <div className="text-[9px] text-zinc-500 italic mt-2">
              * Kara deliğe yaklaştıkça Dünya'daki gözlemci için zamanınız yavaşlar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
