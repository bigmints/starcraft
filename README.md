# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

The shared download CTA copy is keyed in `src/content.tsx` as static JSX compatible with Starcraft's existing text source mapping. Other authored visible copy remains in `src/starcraft-site.tsx`; full catalog editing has not been migrated. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example. Download CTAs link to the latest published desktop release, where visitors can choose Apple Silicon or Intel installers. Motion respects reduced-motion preferences and the pause control.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

Every chapter now flows naturally down the page. The opening, how it works, workspace example, connected tools, FAQ, and closing have content-driven heights. There are no stacked cards, sticky chapter positions, scroll-based scaling, viewport-sized frames, or internal slide scrollbars. The existing illustration, decorative motion, and interactive example remain.

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds the static site with Node 22 and pnpm, then publishes `dist/client` to [starcraft.design](https://starcraft.design/). All builds use root-relative asset paths. The custom domain is configured in the repository's GitHub Pages settings; this Actions deployment does not require a CNAME file.
