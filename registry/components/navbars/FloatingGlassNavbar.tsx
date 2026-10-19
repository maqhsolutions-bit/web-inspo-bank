"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, LayoutGrid, Menu, ShieldCheck, X } from "lucide-react";

export default function FloatingGlassNavbar() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Overview", "Features", "Showcase", "Documentation"];

  return (
    <div className="relative w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-10">
      <div className="text-center text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">
        Live Interactive Floating Navbar Preview
      </div>

      {/* Floating Pill Nav Container */}
      <header className="relative mx-auto flex max-w-2xl items-center justify-between rounded-full border border-zinc-700/60 bg-zinc-900/80 px-4 py-2 shadow-2xl backdrop-blur-xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 pl-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            Aura<span className="text-emerald-400">UI</span>
          </span>
        </div>

        {/* Desktop Links with Sliding Active Pill */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  isActive ? "text-zinc-950 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-zinc-100 shadow-sm"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 transition-all duration-150 hover:bg-emerald-400 active:scale-[0.98]">
            <span>Launch</span>
            <ChevronRight className="h-3 w-3" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-100 sm:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (if toggled) */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mx-auto mt-3 max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/90 p-4 shadow-xl backdrop-blur-xl sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
                  activeTab === tab ? "bg-zinc-800 text-emerald-400" : "text-zinc-300 hover:bg-zinc-800/50"
                }`}
              >
                <span>{tab}</span>
                {activeTab === tab && <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
              </button>
            ))}
            <button className="mt-2 w-full rounded-lg bg-emerald-500 py-2 text-center text-xs font-semibold text-zinc-950 active:scale-[0.98]">
              Launch Studio
            </button>
          </div>
        </motion.div>
      )}

      <div className="mt-8 text-center text-xs text-zinc-500">
        Active Section: <span className="font-semibold text-emerald-400 font-mono">{activeTab}</span>
      </div>
    </div>
  );
}
