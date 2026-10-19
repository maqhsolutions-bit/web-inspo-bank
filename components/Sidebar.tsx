"use client";

import React from "react";
import { CATEGORIES } from "../registry/components";
import { 
  Sparkles, 
  Menu, 
  LayoutGrid, 
  Box, 
  Sliders, 
  MousePointerClick, 
  Scroll, 
  Layers,
  Code2
} from "lucide-react";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categoryCounts: Record<string, number>;
}

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  categoryCounts,
}: SidebarProps) {
  function getCategoryIcon(cat: string) {
    switch (cat) {
      case "Text Animations": return <Sparkles className="h-4 w-4" />;
      case "Navbars": return <Menu className="h-4 w-4" />;
      case "Bento Grids": return <LayoutGrid className="h-4 w-4" />;
      case "Hero Sections": return <Box className="h-4 w-4" />;
      case "Interactive Widgets": return <Sliders className="h-4 w-4" />;
      case "Micro-Interactions": return <MousePointerClick className="h-4 w-4" />;
      case "Scroll Dynamics": return <Scroll className="h-4 w-4" />;
      case "3D & WebGL": return <Box className="h-4 w-4" />;
      default: return <Layers className="h-4 w-4" />;
    }
  }

  return (
    <aside className="w-full shrink-0 border-b border-zinc-800/80 bg-zinc-950/50 p-4 md:w-64 md:border-b-0 md:border-r md:p-6">
      {/* Category List */}
      <div>
        <h2 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3 px-2">
          Categories
        </h2>
        <nav className="flex flex-row flex-wrap gap-1 md:flex-col">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isSelected ? "text-emerald-400" : "text-zinc-500"}>
                    {getCategoryIcon(cat)}
                  </span>
                  <span>{cat}</span>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${
                    isSelected ? "bg-emerald-500/20 text-emerald-300" : "bg-zinc-900 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* AI Studio Assistant Tip Card */}
      <div className="mt-8 hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-4 text-xs md:block">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <Code2 className="h-4 w-4" />
          <span>Tri-Model Workflow</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">
          Click <strong className="text-zinc-200">"Copy for AI"</strong> on any element card to generate a calibrated prompt for Claude Cowork (Fable 5.1) or Antigravity!
        </p>
      </div>
    </aside>
  );
}
