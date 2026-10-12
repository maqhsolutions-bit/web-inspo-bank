# CONVERSATION MIGRATION CONTEXT — WEB INSPO BANK

**Date Migrated:** 2026-09-08 14:38 (Renamed 2026-10-12)
**Target Project Folder:** D:\Web Inspo Bank
**Owner / User:** King (atiqk)

---

## 1. Executive Summary & Why This Project Was Created

This standalone workspace was born on **8 September 2026** to serve as King's private, living **Web Design Inspiration Studio & Component Swipe File**.

### The Origin Story:
1. **The Trigger:** King discovered `bergside/design-md-chrome` (a Chrome extension meant to extract website styles into TypeUI `DESIGN.md` / `SKILL.md` files) and asked Wiz (Antigravity's Web Lead) if it was helpful.
2. **The Senior Evaluation & Prompt Injection Threat:**
   - Wiz analyzed the raw source code of the extension (`content-script.js`, `lib/generate-design-md.mjs`) and strongly advised against it.
   - **Why it failed:** It performed a naive 280-node computed CSS scrape (`window.getComputedStyle`), producing noisy raw RGB/pixel dumps without semantic tokens, responsive classes, or component logic.
   - **The Security Risk (King's sharp insight):** Scraping unescaped external webpage DOM (titles, font-family strings) directly into `SKILL.md` files created a severe **Indirect Prompt Injection** vector when loaded into AI coding agents.
3. **King's True Vision:**
   - King clarified: *"I like the idea of capturing elements I see online—text animations, navbars, hero sections, bento grids, 3D assets—but instead of digging through boring text or static Windows folders, I want to visually browse and interact with them like a website!"*
4. **The Decision:**
   - Rather than cramming this generic design asset library into `KR Career` (which is strictly for Kredit Rakyat's civil servant financing and compliance), King decided to build **Design Vault as an independent, standalone project** at `C:\Users\atiqk\Desktop\Vibe Code\Design Vault\`.
   - This ensures Design Vault is a **universal asset** King can use across all current and future projects (Kredit Rakyat, personal side income projects, future SaaS).

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 15.1.7 (App Router), React 18.3.1, TypeScript 5.7
- **Styling:** Tailwind CSS 3.4 (with custom dark-theme tokens, custom scrollbars, and glow animations)
- **Icons & Motion:** Lucide React 0.475, Framer Motion 11.18.2
- **Port:** **Port 3001** (configured via `npm run dev -p 3001` to prevent port collisions with `pinjamankerajaan` on 3000)
- **Local URL:** `http://localhost:3001`
- **Build Status:** Verified clean — `npm run build` passes 100% (4/4 static pages generated cleanly)

### Key File Map:
```text
Design Vault/
├── app/
│   ├── globals.css           <-- Dark theme base, custom scrollbar, selection styling
│   ├── layout.tsx            <-- Root layout with dark class and metadata
│   └── page.tsx              <-- Main interactive gallery feed + search & category state
├── components/
│   ├── Header.tsx            <-- Brand, search bar, viewport switcher (Desktop, Tablet, Mobile)
│   ├── Sidebar.tsx           <-- Category navigation with dynamic count pills
│   ├── ComponentCard.tsx     <-- Living preview canvas, tags, View Code, Copy Code, Copy for AI
│   └── CodeModal.tsx         <-- Syntax-highlighted code viewer with one-click copy
├── registry/
│   ├── components.ts         <-- SINGLE SOURCE OF TRUTH (All components registered here)
│   └── components/
│       ├── text-animations/  <-- AppleBlurFadeText.tsx
│       ├── navbars/          <-- FloatingGlassNavbar.tsx
│       └── bento-grids/      <-- GlowBentoCard.tsx
├── CLAUDE.md                 <-- Claude Cowork instructions & Fable 5.1 design engineer role
├── STATUS.md                 <-- Cross-platform handoff baton between Cowork & Antigravity
├── .agents/AGENTS.md         <-- Antigravity execution rules
├── CONVERSATION_MIGRATION_CONTEXT.md <-- Comprehensive memory and context brief
└── README.md                 <-- Quick start guide & architecture overview
```

---

## 3. Initial Seed Components Loaded in Vault

1. **`AppleBlurFadeText` (Category: Text Animations):**
   - Cinematic word-by-word progressive blur-to-focus entrance (`filter: blur(12px) -> blur(0px)`) with spring easing.
   - Includes kinetic typography badge and live interactive replay button.
   - Source Inspo: Apple Keynote & Vision Pro showcase.
2. **`FloatingGlassNavbar` (Category: Navbars):**
   - Centered floating pill navbar with active sliding indicator pill (`layoutId="active-pill"`), frosted-glass backdrop blur (`backdrop-blur-xl`), and responsive mobile drawer toggle.
   - Source Inspo: Linear & Vercel navigation headers.
3. **`GlowBentoCard` (Category: Bento Grids):**
   - Mouse-tracking radial border spotlight glow (`radial-gradient` following cursor coordinate in real-time).
   - Senior Bakaus typography, optical checkmark alignments, tabular-nums specs, and tactile CTA button.
   - Source Inspo: Raycast & Linear feature matrix.

---

## 4. Multiplatform Workflow & Tri-Model Studio Pipeline

This workspace operates under King's proven Tri-Model Division of Labor:

1. **Claude Cowork (Fable 5.1):**
   - Role: **Lead Web Builder & Design Engineer** (#1 on LMSYS WebDev Arena).
   - When King shares a website reference, screenshot, or video, Cowork authors the clean React + Tailwind + Framer Motion component in `registry/components/[category]/[ComponentName].tsx`.
   - Follows Bakaus "Quieter UI" (one focal point, no gratuitous gradients) and Kowalski tactile micro-interactions (`active:scale-[0.98]`).
2. **Antigravity (Gemini 3.8 Flash):**
   - Role: **Local Runtime, Test Harness & Verification Anchor**.
   - Runs local dev server on `http://localhost:3001`.
   - Executes Chrome DevTools MCP visual audits (capturing screenshots, verifying responsive viewports).
   - Runs pre-push build verification (`npm run build`) and executes clean Conventional Commits.
3. **Handoff Baton (`STATUS.md`):**
   - Both tools read and update `STATUS.md`.
   - Follows the Session End Protocol and Key Decisions & Why logging standard.

---

## 5. How to Add New Inspo Components in the New Channel

When King shares a new website, component screenshot, or animation in the new conversation:
1. **Identify the Category:**
   - *Text Animations, Navbars, Bento Grids, Hero Sections, Interactive Widgets, Micro-Interactions, Scroll Dynamics, 3D & WebGL, Footers*.
2. **Author the Component:**
   - Create `registry/components/[category]/[ComponentName].tsx`.
   - Make it 100% self-contained, typed, with clean Tailwind CSS and Framer Motion.
3. **Register in `registry/components.ts`:**
   - Import the component.
   - Add entry to `REGISTRY` array with `id`, `title`, `category`, `description`, `tags`, `sourceInspo`, `component`, and `codeSnippet`.
4. **Verify Locally:**
   - Run `npm run build` or inspect on `http://localhost:3001`.
   - Capture a screenshot via Chrome DevTools MCP if visual verification is needed.
5. **Update `STATUS.md`:**
   - Log the new component addition under Session History.

---

## 6. Git Repository State

- **Branch:** `main`
- **Root Commit:** `1042c2a - feat(vault): initialize design vault living component and inspiration showcase`
- **Remote Status:** 100% LOCAL ONLY on laptop disk. ZERO remotes configured. Nothing has been pushed to GitHub.
