# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

All authored visible copy is in `src/starcraft-site.tsx`. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example, not the desktop application. No account, download, pricing or model-backed functionality is implied. Links navigate to working sections. Motion respects reduced-motion preferences and the pause control.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

The opening hero sits on the dark canvas, followed by three Fikr.one-style stacked cards (how it works, workspace, connected tools). FAQ and closing sections return to the canvas. Stable document anchors, fixed stepped sticky offsets, and cumulative 5% scaling keep clean rims visible. Responsive offsets are 20px on desktop, 14px on tablets, and 10px on phones. Only the document scrolls: card content has natural height, with compact responsive layouts and normal page flow if enlarged text or a short viewport cannot fit a chapter. Motion controls pause decorative animations while deck geometry remains stable.
