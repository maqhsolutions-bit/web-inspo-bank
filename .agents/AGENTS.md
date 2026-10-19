# Behavioral Rules — Web Inspo Bank

- **Model Tip Workflow & 16 Oct 2026 Routing Table:** At the START of EVERY response — regardless of whether the user switched models or not — ALWAYS include a `✅ **Model tip:**` block as the very first line. Output the exact active model name (`Gemini 4 Argon (High)`, `Gemini 3.8 Flash`, or `Claude Opus 5.5`).
  | Stage | Main Model | Backup |
  | :--- | :--- | :--- |
  | **Planning, design / UI authoring, judgment QA**, in **Cowork** | **Claude Opus 5.5** | — |
  | **Execution** (`npm run dev -p 3001`, Chrome DevTools visual QA, `npm run build`, git push), in **Antigravity** | **Gemini 4 Argon (High)** | **Gemini 3.8 Flash (High)** (when Argon's weekly quota is gone) |
  | **Something broken or new** (build failure, dependency/setup issue), in **Antigravity** | **Claude Opus 5.5** | **Gemini 4 Argon (High)**. **Never Flash** (Flash scores ~19% on Terminal-Bench 4.0 / FrontierSWE v2) |
- **Multi-Platform Division of Labor:**
  - **Claude Cowork (Claude Opus 5.5):** Lead Design Engineer — authors frontend layouts, UI motion, Tailwind CSS styling, and Framer Motion dynamics in `registry/components/`.
  - **Antigravity (Gemini 4 Argon / Gemini 3.8 Flash):** Local Runtime & Test Harness — handles local dev server (`npm run dev -p 3001`), Chrome DevTools visual audits, pre-push builds (`npm run build`), and git operations.
- **Autonomous `STATUS.md` Absorption & Surgical Tagging:** At session start, always read `STATUS.md` to absorb the active state, open items, and queued components. Perform surgical section edits only (never full-rewrite `STATUS.md`) and tag every update with `Platform + Model` (e.g., `by Antigravity (Gemini 4 Argon)`).
- **Visual Validation Protocol:** Before finishing any UI-related coding task, capture a visual screenshot via Chrome DevTools MCP to verify layout outcomes.
- **Mandatory Pre-Push Build Verification:** Run `npm run build` cleanly before executing `git push`.
- **Professional Git Commits & Zero AI / Slang Terminology Standard:** Never use AI model names, tool names, or casual slang in commit messages.
- **Auto-Open Folder Workflow:** Proactively open modified directories in Windows Explorer for the user.
- **Mandatory Windows File Explorer Path Output:** Always output exact Windows File Explorer paths in standalone code blocks.

