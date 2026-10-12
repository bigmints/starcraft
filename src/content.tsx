// Keep shared authored text as static JSX so Starcraft's existing text editor
// can map every occurrence back to this canonical source.
export const content = {
  'actions.downloadApp': <span>Download app</span>,
} as const;

export const appDownloadUrl =
  'https://github.com/bigmints/starcraft/releases/latest';
