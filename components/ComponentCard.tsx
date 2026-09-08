"use client";

import React, { useState } from "react";
import { Check, Code2, Copy, ExternalLink, Sparkles } from "lucide-react";
import { RegistryItem } from "../registry/components";
import CodeModal from "./CodeModal";

interface ComponentCardProps {
  item: RegistryItem;
  viewport: "desktop" | "tablet" | "mobile";
}

export default function ComponentCard({ item, viewport }: ComponentCardProps) {
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const ComponentToRender = item.component;

  function handleCopyCode() {
    navigator.clipboard.writeText(item.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  }

  function handleCopyPrompt() {
    const prompt = `Hey, let's build a component inspired by "${item.title}" from Design Vault (Category: ${item.category}).\nKey characteristics: ${item.description}\nSource Inspiration: ${item.sourceInspo}\nPlease adapt this using our Bakaus "Quieter UI" and Kowalski tactile micro-interactions in clean Next.js 15 App Router + Tailwind TSX.`;
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  }

  // Viewport container width styling
  const viewportWidthClass =
    viewport === "mobile"
      ? "max-w-[390px] border-zinc-700/80 shadow-2xl"
      : viewport === "tablet"
      ? "max-w-[768px]"
      : "w-full";

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80">
      {/* Top Meta Details */}
      <div className="flex flex-col gap-2 border-b border-zinc-800/80 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 font-mono">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <span>Inspo:</span>
              <strong className="text-zinc-400 font-medium">{item.sourceInspo}</strong>
            </span>
          </div>

          <h2 className="mt-2 text-lg font-semibold tracking-tight text-zinc-100">
            {item.title}
          </h2>
          <p className="mt-1 text-xs text-zinc-400 leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 sm:pt-0">
          <button
            onClick={() => setCodeModalOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white active:scale-[0.98] transition-all"
          >
            <Code2 className="h-3.5 w-3.5 text-zinc-400" />
            <span>View Code</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 active:scale-[0.98] transition-all"
          >
            {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedCode ? "Copied Code!" : "Copy Code"}</span>
          </button>

          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-500/60 active:scale-[0.98] transition-all"
          >
            {copiedPrompt ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Sparkles className="h-3.5 w-3.5 text-emerald-400" />}
            <span>{copiedPrompt ? "Copied for AI!" : "Copy for AI"}</span>
          </button>
        </div>
      </div>

      {/* Live Interactive Preview Canvas */}
      <div className="flex w-full items-center justify-center overflow-x-auto bg-zinc-900/20 p-6 sm:p-10">
        <div className={`transition-all duration-300 ${viewportWidthClass}`}>
          <ComponentToRender />
        </div>
      </div>

      {/* Bottom Tags */}
      <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-800/60 px-6 py-3 bg-zinc-950/40 text-[11px] text-zinc-500">
        <span className="font-mono text-zinc-600">Tags:</span>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-zinc-800/80 bg-zinc-900/60 px-2 py-0.5 text-zinc-400"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Code Modal */}
      <CodeModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
        title={item.title}
        code={item.codeSnippet}
      />
    </div>
  );
}
