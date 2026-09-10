# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

All authored visible copy is in `src/starcraft-site.tsx`. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example, not the desktop application. No account, download, pricing or model-backed functionality is implied. Links navigate to working sections. Motion respects reduced-motion preferences and the pause control.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

Every chapter now flows naturally down the page. The opening, how it works, workspace example, connected tools, FAQ, and closing have content-driven heights. There are no stacked cards, sticky chapter positions, scroll-based scaling, viewport-sized frames, or internal slide scrollbars. The existing illustration, decorative motion, and interactive example remain.

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds the static site with Node 22 and pnpm, then publishes `dist/client` to [GitHub Pages](https://bigmints.github.io/starcraft/). GitHub Pages uses `/starcraft/`; local and Sites builds continue to use `/`.
