# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

All authored visible copy is in `src/starcraft-site.tsx`. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example, not the desktop application. No account, download, pricing or model-backed functionality is implied. Links navigate to working sections. Motion respects reduced-motion preferences and the pause control.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

The page uses a stacked scroll deck. Chapters dock with CSS sticky positioning; taller chapters finish scrolling before docking. A ResizeObserver recalculates docking after responsive changes and FAQ expansion. Scroll-linked scaling and shading pause with the Motion control and respect reduced motion.
