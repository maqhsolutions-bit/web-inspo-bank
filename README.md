# Web Inspo Bank — Living Component & Inspiration Studio

A private, interactive web application and design inspiration bank. Every design reference, animation, navbar, bento grid, or interactive widget is stored as a living, self-contained React + Tailwind + Framer Motion component ready to drop into client websites or personal projects.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (runs on port 3001)
npm run dev

# 3. Open in browser
http://localhost:3001
```

---

## What Was Built in Web Inspo Bank

1. **Standalone Architecture & Multiplatform Handoff:**
   - Isolated at `D:\Web Inspo Bank` (and local `Web Inspo Bank`).
   - Equipped with `STATUS.md`, `CLAUDE.md`, and `.agents/AGENTS.md` so Claude Cowork (Opus 5.5) and Antigravity can collaborate seamlessly on design components.

2. **Interactive Showcase Features:**
   - **Real-Time Interactive Canvas:** Every component is rendered live with real hover states, animations, and clickable controls.
   - **Viewport Simulator (Desktop | Tablet | Mobile):** Test how any component behaves at full width, 768px tablet, or 390px mobile phone with a single click.
   - **Instant Search & Category Filtering:** Filter across *Text Animations, Navbars, Bento Grids, Hero Sections, Interactive Widgets, Micro-Interactions, Scroll Dynamics, and 3D & WebGL*.
   - **One-Click Code & Prompt Copying:**
     - **View Code:** Opens a clean, dark modal with full syntax-highlighted TSX code.
     - **Copy Code:** Copies clean, production-ready Tailwind + Framer Motion TSX to your clipboard.
     - **Copy for AI:** Generates a pre-calibrated prompt ready to paste into Claude Cowork (Opus 5.5) or Antigravity to build it into your projects.

3. **Seeded with 3 Award-Winning Components:**
   - **AppleBlurFadeText** (*Text Animations*): Progressive word-by-word blur-to-focus typography entrance animation with spring easing and a live replay button.
   - **FloatingGlassNavbar** (*Navbars*): Centered floating pill navbar with active sliding indicator pill, frosted-glass backdrop blur, and responsive mobile toggle.
   - **GlowBentoCard** (*Bento Grids*): Cursor-tracking radial border spotlight glow with senior Bakaus typography and optical checkmark hierarchy.

4. **Clean Git Initialization & Pre-Push Build Check:**
   - `npm run build` compiled 100% cleanly (4/4 static pages, zero type errors).
   - Initialized Git on branch `main`.

---

## Multi-Platform Division of Labor

This workspace is designed for seamless cross-platform collaboration between **Claude Cowork (Claude Opus 5.5)** and **Antigravity (Gemini 3.8 Flash)**:

1. **Claude Cowork (running Claude Opus 5.5):**
   - Lead Design Engineer & Master Architect.
   - Authors new components in `registry/components/[category]/[ComponentName].tsx`.
   - Applies Bakaus "Quieter UI" and Kowalski tactile micro-interaction standards.

2. **Antigravity (running Gemini 3.8 Flash):**
   - Local Runtime & Test Harness.
   - Runs local dev server on `http://localhost:3001`.
   - Conducts Chrome DevTools visual audits & pre-push builds (`npm run build`).
   - Executes clean conventional git commits.

3. **Baton Handoff:**
   - Synchronized via `STATUS.md`.

---

## How to Add a New Inspo Component

1. Create a self-contained component file in `registry/components/[category]/[ComponentName].tsx`.
2. Register it in `registry/components.ts`:
   - `id`: unique slug
   - `title`: human-readable title
   - `category`: e.g. "Text Animations", "Navbars", "Bento Grids", "Hero Sections"
   - `description`: key motion/design behavior
   - `tags`: array of tags
   - `sourceInspo`: website or reference source
   - `component`: the React component
   - `codeSnippet`: the raw TSX code string
3. Refresh `http://localhost:3001` — your new component is live, searchable, and ready to copy!
