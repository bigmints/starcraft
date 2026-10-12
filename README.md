# Starcraft website

Standalone marketing website. Node 22 and pnpm.

Run `pnpm install`, then `pnpm dev --port 4329`. Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build` before publishing.

Website copy, accessibility labels, and page metadata are keyed in `src/content.tsx`. The site introduces design systems, copywriting, and prototyping through a designer's workflow. Shared theme and motion live in `app/globals.css`. The workspace is explicitly an interactive example. Download CTAs start the latest Apple Silicon DMG download directly, with a separate Intel Mac link. `scripts/update-downloads.mjs` resolves and validates both assets before each build; `src/downloads.json` provides direct links before JavaScript loads. The browser refreshes those links from GitHub’s latest-release API and retains the build snapshot if the request fails. Publishing a release also rebuilds the site. Builds require access to the GitHub API. Motion respects reduced-motion preferences and the pause control.

The development preview includes a Content catalog below the footer, exposing every entry, including hidden states and metadata, for selection with Starcraft's existing text editor. Each entry is a static JSX leaf so edits use the existing source-mapping and persistence path. Keep those leaves on one line; `src/content.tsx` is excluded from automatic formatting because added JSX whitespace breaks the current editor's one-child requirement. This is a website-specific catalog, not a migration of Starcraft's generic content resolver or generated project templates. Backend save/reload and repeated-key rendering have been checked; the complete UI edit round trip still needs the built-in preview tools.

`src/app-preview.tsx` recreates the desktop workspace using the monogram geometry, neutral/purple light theme, compact project header, Canvas/Preview switch, conversation pane, composer, and preview tools from the app source. Its sample interactions switch views and viewport size, toggle the pages panel, reveal an example comment, try/undo a preset headline, and change/reset the sample palette. These are local illustrative states, not AI requests, real comments, or saved project edits. The desktop Agent/Model selectors are outside this website change.

The original ink illustration was generated for this site. Hosting registration is in `.openai/hosting.json`.

Every chapter now flows naturally down the page. The opening, how it works, workspace example, connected tools, FAQ, and closing have content-driven heights. There are no stacked cards, sticky chapter positions, scroll-based scaling, viewport-sized frames, or internal slide scrollbars. The existing illustration, decorative motion, and interactive example remain.

Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow builds the static site with Node 22 and pnpm, then publishes `dist/client` to [starcraft.design](https://starcraft.design/). All builds use root-relative asset paths. The custom domain is configured in the repository's GitHub Pages settings; this Actions deployment does not require a CNAME file.
