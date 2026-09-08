# Design Vault — Living Component & Inspiration Studio

A private, interactive web application and design swipe file. Every design inspiration, animation, navbar, bento grid, or interactive widget is stored as a living, self-contained React + Tailwind + Framer Motion component.

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

## Tri-Model Division of Labor

This workspace is designed for seamless cross-platform collaboration between **Claude Cowork (Fable 5.1)** and **Antigravity (Gemini 3.8 Flash)**:

1. **Claude Cowork (running Fable 5.1):**
   - Lead Design Engineer (#1 on LMSYS WebDev Arena).
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
