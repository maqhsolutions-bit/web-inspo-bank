# Behavioral Rules — Web Inspo Bank

- **Model Tip Workflow:** At the START of EVERY response — regardless of whether the user switched models or not — ALWAYS include a `✅ **Model tip:**` block as the very first line. Output the exact active model name (e.g. "Gemini 3.8 Flash").
- **Multi-Platform Division of Labor:**
  - **Claude Cowork (Claude Opus 5.5):** Lead Design Engineer — authors frontend layouts, UI motion, Tailwind CSS styling, and Framer Motion dynamics in `registry/components/`.
  - **Antigravity (Gemini 3.8 Flash):** Local Runtime & Test Harness — handles local dev server (`npm run dev -p 3001`), Chrome DevTools visual audits, pre-push builds (`npm run build`), and git operations.
- **Autonomous STATUS Absorption:** At session start, always read `STATUS.md` to absorb the active state, open items, and queued components.
- **Visual Validation Protocol:** Before finishing any UI-related coding task, capture a visual screenshot via Chrome DevTools MCP to verify layout outcomes.
- **Mandatory Pre-Push Build Verification:** Run `npm run build` cleanly before executing `git push`.
- **Professional Git Commits & Zero AI / Slang Terminology Standard:** Never use AI model names, tool names, or casual slang in commit messages.
- **Auto-Open Folder Workflow:** Proactively open modified directories in Windows Explorer for the user.
- **Mandatory Windows File Explorer Path Output:** Always output exact Windows File Explorer paths in standalone code blocks.
