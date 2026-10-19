import React from "react";
import AppleBlurFadeText from "./components/text-animations/AppleBlurFadeText";
import FloatingGlassNavbar from "./components/navbars/FloatingGlassNavbar";
import GlowBentoCard from "./components/bento-grids/GlowBentoCard";

export interface RegistryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  sourceInspo: string;
  component: React.ComponentType;
  codeSnippet: string;
}

export const CATEGORIES = [
  "All Elements",
  "Text Animations",
  "Navbars",
  "Bento Grids",
  "Hero Sections",
  "Interactive Widgets",
  "Micro-Interactions",
  "Scroll Dynamics",
  "3D & WebGL",
] as const;

export const REGISTRY: RegistryItem[] = [
  {
    id: "apple-blur-fade-text",
    title: "Apple Progressive Blur-to-Focus Text Entrance",
    category: "Text Animations",
    description: "Cinematic progressive word-by-word blur-to-focus typography entrance animation with spring easing.",
    tags: ["Apple", "Typography", "Framer Motion", "Hero", "Entrance"],
    sourceInspo: "Apple Product Keynote / Vision Pro Showcase",
    component: AppleBlurFadeText,
    codeSnippet: `// AppleBlurFadeText.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AppleBlurFadeText({ headline = "Engineered for speed." }) {
  const words = headline.split(" ");
  return (
    <h2 className="text-3xl font-semibold tracking-tight text-white">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}`,
  },
  {
    id: "floating-glass-navbar",
    title: "Frosted Glass Floating Pill Navbar",
    category: "Navbars",
    description: "Centrally floating pill navigation bar with active sliding indicator, backdrop-blur-xl, and responsive mobile drawer.",
    tags: ["Navbar", "Glassmorphism", "Sliding Pill", "Responsive", "Header"],
    sourceInspo: "Vercel / Linear Navigation Bar",
    component: FloatingGlassNavbar,
    codeSnippet: `// FloatingGlassNavbar.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingGlassNavbar() {
  const [active, setActive] = useState("Overview");
  const tabs = ["Overview", "Features", "Showcase"];
  return (
    <nav className="flex items-center gap-1 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-4 py-2 shadow-2xl backdrop-blur-xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-300"
        >
          {active === tab && (
            <motion.div
              layoutId="pill"
              className="absolute inset-0 rounded-full bg-white shadow-sm"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className={active === tab ? "relative z-10 text-zinc-950 font-semibold" : "relative z-10"}>
            {tab}
          </span>
        </button>
      ))}
    </nav>
  );
}`,
  },
  {
    id: "glow-bento-card",
    title: "Mouse-Tracking Spotlight Glow Bento Card",
    category: "Bento Grids",
    description: "Interactive card with dynamic cursor-tracking radial border glow, tabular-nums specs, and tactile button action.",
    tags: ["Bento Grid", "Cursor Spotlight", "Radial Glow", "Cards", "Interactive"],
    sourceInspo: "Raycast / Linear Feature Matrix",
    component: GlowBentoCard,
    codeSnippet: `// GlowBentoCard.tsx
"use client";
import React, { useRef, useState } from "react";

export default function GlowBentoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-3xl border border-zinc-800 bg-zinc-950 p-7"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: hovered
            ? \`radial-gradient(350px circle at \${pos.x}px \${pos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)\`
            : "none",
        }}
      />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-zinc-100">Spotlight Bento Card</h3>
        <p className="mt-2 text-xs text-zinc-400">Radial cursor glow border tracking.</p>
      </div>
    </div>
  );
}`,
  },
];
