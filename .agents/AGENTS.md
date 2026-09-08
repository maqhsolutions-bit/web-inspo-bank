# Behavioral Rules — Design Vault

- **Model Tip Workflow:** At the START of EVERY response — regardless of whether the user switched models or not — ALWAYS include a `✅ **Model tip:**` block as the very first line. State which model is currently active (e.g. "Gemini 3.8 Flash").
- **Tri-Model Division of Labor:**
  - Claude Cowork (Fable 5.1) authors frontend layouts and components.
  - Antigravity (Gemini 3.8 Flash) handles local runtime, dev server (`npm run dev -p 3001`), Chrome DevTools visual audits, pre-push builds (`npm run build`), and git commits.
- **Visual Validation Protocol:** Before finishing any UI-related coding task, capture a visual screenshot via Chrome DevTools MCP to verify layout outcomes.
- **Mandatory Pre-Push Build Verification:** Run `npm run build` cleanly before executing `git push`.
- **Professional Git Commits & Zero AI / Slang Terminology Standard:** Never use AI model names, tool names, or casual slang in commit messages.
- **Auto-Open Folder Workflow:** Proactively open modified directories in Windows Explorer for King.
- **Mandatory Windows File Explorer Path Output:** Always output exact `C:\Users\...` paths in standalone code blocks.
