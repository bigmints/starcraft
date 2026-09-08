# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

All authored visible copy is in `src/starcraft-site.tsx`. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example, not the desktop application. No account, download, pricing or model-backed functionality is implied. Links navigate to working sections. Motion respects reduced-motion preferences and the pause control.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

The page uses the Fikr.one stacked-card approach: stable document anchors, fixed stepped sticky offsets, and cumulative 5% scaling per layer. Long content scrolls inside each pinned card, with an empty rim protecting the exposed edge. Responsive offsets are 20px on desktop, 14px on tablets, and 10px on phones. The final card has enough scroll space to remain pinned. The Motion control and reduced-motion preference pause the decorative animations; deck geometry remains stable.
