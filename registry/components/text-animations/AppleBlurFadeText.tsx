"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, Sparkles } from "lucide-react";

interface AppleBlurFadeTextProps {
  headline?: string;
  subheadline?: string;
}

export default function AppleBlurFadeText({
  headline = "Engineered for pure speed and cinematic precision.",
  subheadline = "Every micro-interaction is tuned to sub-pixel accuracy. Zero layout shift. Zero fluff.",
}: AppleBlurFadeTextProps) {
  const [key, setKey] = useState(0);

  const words = headline.split(" ");

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Pill Badge */}
      <motion.div
        key={`badge-${key}`}
        initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300"
      >
        <Sparkles className="h-3.5 w-3.5" />
        <span>Kinetic Typography System</span>
      </motion.div>

      {/* Progressive Blur Headline */}
      <h2
        key={`headline-${key}`}
        className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl sm:leading-tight"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block mr-1.5"
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subheadline Fade */}
      <motion.p
        key={`sub-${key}`}
        initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-lg text-sm text-zinc-400 sm:text-base"
        style={{ textWrap: "pretty" } as React.CSSProperties}
      >
        {subheadline}
      </motion.p>

      {/* Replay Controller Button */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => setKey((prev) => prev + 1)}
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/80 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 transition-all duration-150 hover:border-zinc-500 hover:bg-zinc-800 active:scale-[0.98]"
        >
          <RotateCw className="h-3.5 w-3.5" />
          <span>Replay Blur Entrance</span>
        </button>
      </div>
    </div>
  );
}
