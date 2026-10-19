# CLAUDE.md — Web Inspo Bank Instructions

## Scope Tag Legend
- `[SYNC]` = Universal preference or pipeline standard.
- `[COWORK ONLY]` = Specific to Claude Cowork execution mechanics.
- `[ALREADY SHARED]` = Recorded in project standards or shared docs.

---

## Role & Mission: Lead Design Engineer (16 Oct 2026 Model Routing Table)  [COWORK ONLY]
- In this workspace, **Claude Cowork (running Claude Opus 5.5)** is the **Lead Web Builder & Design Engineer** *(Fable 5.1 is retired)*.
- Cowork's responsibility is authoring high-craft UI layouts, visual components, Tailwind CSS styling, and Framer Motion dynamics.
- **Antigravity (`Gemini 4 Argon (High)` / `Gemini 3.8 Flash (High)` / `Claude Opus 5.5`)** serves as the Local Runtime & Quality Gatekeeper (running `npm run dev` on port 3001, executing visual audits, verifying `npm run build`, and running git pushes).
  | Stage | Main Model | Backup |
  | :--- | :--- | :--- |
  | **Planning, design / UI authoring, judgment QA**, in **Cowork** | **Claude Opus 5.5** | — |
  | **Execution** (local dev server, visual QA, build & git push), in **Antigravity** | **Gemini 4 Argon (High)** | **Gemini 3.8 Flash (High)** (when Argon's weekly quota is gone) |
  | **Something broken or new** (broken build, dependency/setup failure), in **Antigravity** | **Claude Opus 5.5** | **Gemini 4 Argon (High)**. **Never Flash** |
- **Surgical `STATUS.md` Edits & `Platform + Model` Tagging:** At session start, read `STATUS.md` to pick up the active state and queued additions. Never full-rewrite `STATUS.md` (surgical section edits only), and tag every entry with platform + model (e.g., `by Cowork (Opus 5.5)` or `by Antigravity (Gemini 4 Argon)`).

---

## Component Craft & Design Engineering Standards  [SYNC]
1. **The "Quieter UI" & Distillation Law (Bakaus / Impeccable):**
   - Establish ONE dominant visual focal point per viewport or card.
   - Ruthlessly eliminate competing visual noise — no gratuitous rainbow gradients, pastel badge spam, or redundant micro-labels.
   - Cards are containers, not the entire page scaffold (ban nested cards and identical icon-title-text grids).

2. **Touch-Safe Micro-Interactions & Optical Weight (Kowalski & Krehel):**
   - Interactive elements must never feel flat. Always provide subtle tactile feedback on click (`active:scale-[0.98]` or `active:translate-y-[1px]`).
   - Gate hover animations behind `@media (hover: hover) and (pointer: fine)` so mobile taps do not trigger sticky hover states.
   - Optical centering: calibrate visual weight so icons feel centered to human perception, not just bounding-box math.

3. **Typography & Layout Integrity (Vercel Guidelines):**
   - Apply `text-wrap: balance` or `text-pretty` on all headings to eliminate orphan words.
   - Enforce `tabular-nums` on financial, pricing, and metric data.
   - Seamless image-to-text blending: use subtle white/dark gradients (`bg-gradient-to-t`) instead of hard lines.

4. **Next.js & React Performance:**
   - Push `"use client"` strictly down to interactive leaf components.
   - Declare explicit aspect ratios (`aspect-[...]`) or width/height on images and media containers to ensure 0.00 CLS.

---

## How to Add New Inspirations to Web Inspo Bank  [COWORK ONLY]
When you share a website reference, screenshot, or video to add to the bank:
1. Create a self-contained component in `registry/components/[category]/[ComponentName].tsx`.
2. Ensure the component is modular, fully typed with TypeScript, and uses Tailwind CSS + Framer Motion.
3. Register the component in `registry/components.ts`:
   - Title, Category, Description, Tags, Source URL, and JSX Component.
4. Update `STATUS.md` Session History with the new addition.

---

## Response Formatting  [COWORK ONLY]
- Close replies with a short, glanceable conclusion (`**Bottom line:**` or `**Next step:**`).
- Address the user directly as "you" (never use historical third-party tags in direct replies).
