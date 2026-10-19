"use client";

import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ComponentCard from "../components/ComponentCard";
import { REGISTRY, CATEGORIES } from "../registry/components";
import { Layers, Sparkles } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Elements");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Elements": REGISTRY.length };
    for (const item of REGISTRY) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter components by category and search
  const filteredComponents = useMemo(() => {
    return REGISTRY.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Elements" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.sourceInspo.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b]">
      {/* Top Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewport={viewport}
        setViewport={setViewport}
        totalComponents={REGISTRY.length}
      />

      {/* Main Content Area: Sidebar + Showcase Grid */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />

        {/* Components Feed */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 space-y-8 overflow-y-auto">
          {/* Section Hero Banner */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <h2 className="text-xl font-bold tracking-tight text-zinc-100">
                {selectedCategory}
              </h2>
            </div>
            <p className="text-xs text-zinc-400">
              Showing {filteredComponents.length} living components. All elements are interactive and ready to drop into any Next.js + Tailwind project.
            </p>
          </div>

          {/* Component Cards List */}
          {filteredComponents.length > 0 ? (
            <div className="space-y-8">
              {filteredComponents.map((item) => (
                <ComponentCard key={item.id} item={item} viewport={viewport} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 p-16 text-center">
              <Layers className="h-10 w-10 text-zinc-600 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-300">No components match your search</h3>
              <p className="mt-1 text-xs text-zinc-500 max-w-sm">
                Try searching for another keyword or switch category filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Elements");
                }}
                className="mt-4 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 hover:border-emerald-500/50"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
