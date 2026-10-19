"use client";

import React, { useRef, useState } from "react";
import { Check, Cpu, ExternalLink, Flame, ShieldAlert, Zap } from "lucide-react";

export default function GlowBentoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div className="flex w-full justify-center p-4">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-7 shadow-2xl transition-all duration-300 hover:border-zinc-700/80"
      >
        {/* Dynamic Mouse Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: isHovered
              ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`
              : "none",
          }}
        />

        {/* Card Header & Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/90 text-emerald-400 shadow-inner group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 transition-colors duration-200">
            <Zap className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 font-mono">
            99.98% Latency
          </span>
        </div>

        {/* Card Body (Bakaus Quieter UI Focus) */}
        <div className="relative z-10 mt-6">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-100" style={{ textWrap: "balance" } as React.CSSProperties}>
            Autonomous Edge Runtime
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Distributes computation instantly to the closest edge nodes with sub-5ms cold starts and real-time state hydration.
          </p>
        </div>

        {/* Spec List with Optical Alignments */}
        <div className="relative z-10 mt-6 space-y-2.5 border-t border-zinc-800/80 pt-5 text-xs text-zinc-300">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-zinc-400">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Throughput Floor</span>
            </span>
            <span className="font-mono font-semibold text-zinc-100 tabular-nums">48.2k req/s</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-zinc-400">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Global TTFB</span>
            </span>
            <span className="font-mono font-semibold text-emerald-400 tabular-nums">2.4ms avg</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-zinc-400">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Memory Footprint</span>
            </span>
            <span className="font-mono font-semibold text-zinc-100 tabular-nums">&lt; 14.8 MB</span>
          </div>
        </div>

        {/* Bottom Interactive Action */}
        <div className="relative z-10 mt-6 pt-2">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900 py-2.5 text-xs font-semibold text-zinc-100 transition-all duration-150 hover:border-emerald-500/40 hover:bg-zinc-800 active:scale-[0.98]">
            <span>Inspect Benchmark Specs</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
