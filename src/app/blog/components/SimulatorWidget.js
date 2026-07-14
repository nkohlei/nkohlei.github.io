"use client";

import { useState } from "react";

export default function SimulatorWidget() {
  // Altitude state (0 to 12000 meters)
  const [altitude, setAltitude] = useState(8848);
  // Time dilation state (Distance in km)
  const [distance, setDistance] = useState(15);
  const rs = 10; // Schwarzschild radius in km

  // O2 calculation
  const o2Percentage = (20.9 * Math.exp(-altitude / 8200)).toFixed(2);
  const isDeathZone = altitude >= 8000;

  // Oxygen bar color logic
  let o2ColorClass = "bg-emerald-500 shadow-[0_0_12px_#10b981]";
  if (altitude >= 8000) {
    o2ColorClass = "bg-red-500 shadow-[0_0_12px_#ef4444] animate-pulse";
  } else if (altitude >= 4000) {
    o2ColorClass = "bg-amber-500 shadow-[0_0_12px_#f59e0b]";
  }

  // Time dilation calculation: t_earth = t_orbit / sqrt(1 - rs/r)
  let dilationFactor = 1;
  if (distance > rs) {
    dilationFactor = 1 / Math.sqrt(1 - rs / distance);
  } else {
    dilationFactor = Infinity;
  }

  const formatDilation = (factor) => {
    if (factor === Infinity) return "CRITICAL: EVENT HORIZON REACHED";
    if (factor > 3600) return `${(factor / 3600).toFixed(1)} SAAT`;
    if (factor > 60) return `${(factor / 60).toFixed(1)} DAKİKA`;
    return `${factor.toFixed(1)} SANİYE`;
  };

  return (
    <div className="glass-panel rounded-lg p-6 md:p-8 font-mono text-xs border border-zinc-200 dark:border-white/5 bg-zinc-50/20 dark:bg-zinc-950/40 text-foreground w-full">
      <div className="border-b border-zinc-200 dark:border-white/5 pb-4 mb-6">
        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          APEX FLIGHT COMPUTER // SIMULATOR WIDGET
        </h3>
        <p className="text-[10px] text-zinc-500 uppercase mt-1">İnteraktif Yerçekimi ve Atmosferik Modelleme Terminali</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Module 01: Altitude HUD */}
        <div className="border border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/10 p-5 rounded-lg">
          <h4 className="font-extrabold text-slate-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-white/5 pb-3 text-[11px] uppercase tracking-wider mb-4">
            [ SECTION 01: ATMOSPHERIC HYPOXIA CONTROLLER ]
          </h4>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-zinc-500">ALTITUDE ALT (YÜKSEKLİK):</span>
                <span className="text-blue-500 font-bold font-sans text-sm">{altitude} m</span>
              </div>
              <input
                type="range"
                min="0"
                max="12000"
                step="50"
                value={altitude}
                onChange={(e) => setAltitude(parseInt(e.target.value))}
                className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                <span>0 m (Sea Level)</span>
                <span>12000 m (Death Zone Apex)</span>
              </div>
            </div>

            <div className="bg-zinc-100/80 dark:bg-zinc-950/60 p-4 rounded border border-zinc-200 dark:border-white/5 space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-zinc-500">EFFECTIVE O₂ LEVEL:</span>
                  <span className="text-xl font-black font-sans tracking-tight text-slate-900 dark:text-white">
                    {o2Percentage}%
                  </span>
                </div>
                {/* Dynamic progress bar */}
                <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${o2ColorClass}`}
                    style={{ width: `${(parseFloat(o2Percentage) / 20.9) * 100}%` }}
                  />
                </div>
              </div>

              {isDeathZone ? (
                <div className="text-center py-2 rounded bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 font-black text-[10px] animate-pulse">
                  CRITICAL DANGER: EXCEEDED HUMAN ACCLIMATIZATION LIMIT (DEATH ZONE)
                </div>
              ) : (
                <div className="text-center py-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                  STATUS: LIFE SUPPORT STABLE
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Module 02: Relativistic Time HUD */}
        <div className="border border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/10 p-5 rounded-lg">
          <h4 className="font-extrabold text-slate-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-white/5 pb-3 text-[11px] uppercase tracking-wider mb-4">
            [ SECTION 02: SCHWARZSCHILD TIME DILATOR ]
          </h4>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-zinc-500">RADIAL DISTANCE (KM):</span>
                <span className="text-purple-500 font-bold font-sans text-sm">{distance} km</span>
              </div>
              <input
                type="range"
                min="11"
                max="100"
                value={distance}
                onChange={(e) => setDistance(parseInt(e.target.value))}
                className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <div className="flex justify-between text-[9px] text-zinc-400 mt-1">
                <span className="text-red-500 font-bold">11 km (Event Horizon)</span>
                <span>100 km (Flat Space)</span>
              </div>
            </div>

            <div className="bg-zinc-100/80 dark:bg-zinc-950/60 p-4 rounded border border-zinc-200 dark:border-white/5 space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-zinc-500">1 SEC ON SHUTTLE =</span>
                </div>
                <div className="text-xl font-black font-sans tracking-tight text-slate-900 dark:text-white truncate">
                  {formatDilation(dilationFactor)}
                </div>
                <span className="text-[9px] text-zinc-500">ON EARTH (DÜNYA ZAMANI)</span>
              </div>

              {distance <= 12 ? (
                <div className="text-center py-2 rounded bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 font-black text-[10px] animate-pulse">
                  GRAVITATIONAL FORCE EXTREME // TIME SLOWING DOWN EXPONENTIALLY
                </div>
              ) : (
                <div className="text-center py-2 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-zinc-500 font-bold text-[10px]">
                  SYSTEM STATUS: RELATIVISTIC ORBIT STEADY
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
