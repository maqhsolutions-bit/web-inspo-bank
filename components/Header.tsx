"use client";

import React from "react";
import { Sparkles, Monitor, Smartphone, Tablet, Search, Layers } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  viewport: "desktop" | "tablet" | "mobile";
  setViewport: (v: "desktop" | "tablet" | "mobile") => void;
  totalComponents: number;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  viewport,
  setViewport,
  totalComponents,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex flex-col gap-4 border-b border-zinc-800/80 bg-zinc-950/80 px-6 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      {/* Brand & Stats */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 shadow-md">
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base font-bold tracking-tight text-zinc-100">
              Web Inspo <span className="text-emerald-400">Bank</span>
            </h1>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 font-mono">
              v1.0 Live
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            {totalComponents} production-ready interactive inspirations
          </p>
        </div>
      </div>

      {/* Middle: Search Input */}
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search components or tags..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 pl-9 pr-4 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
        />
      </div>

      {/* Right: Viewport Simulator Switcher */}
      <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/70 p-1">
        <button
          onClick={() => setViewport("desktop")}
          title="Desktop Viewport (100%)"
          className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
            viewport === "desktop"
              ? "bg-zinc-800 text-emerald-400 shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Monitor className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Desktop</span>
        </button>

        <button
          onClick={() => setViewport("tablet")}
          title="Tablet Viewport (768px)"
          className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
            viewport === "tablet"
              ? "bg-zinc-800 text-emerald-400 shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Tablet className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Tablet</span>
        </button>

        <button
          onClick={() => setViewport("mobile")}
          title="Mobile Viewport (390px)"
          className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
            viewport === "mobile"
              ? "bg-zinc-800 text-emerald-400 shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          <Smartphone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Mobile</span>
        </button>
      </div>
    </header>
  );
}
