import { writeFile } from 'node:fs/promises';
import {
  latestReleaseApi,
  parseReleaseDownloads,
} from '../src/release-downloads.mjs';

const headers = { Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const response = await fetch(latestReleaseApi, {
  headers,
  signal: AbortSignal.timeout(15000),
});
if (!response.ok)
  throw new Error(
    `Could not resolve latest app release: HTTP ${response.status}`,
  );
const downloads = parseReleaseDownloads(await response.json());
if (!downloads)
  throw new Error(
    'Latest app release does not contain a valid pair of uploaded DMGs.',
  );
await writeFile(
  new URL('../src/downloads.json', import.meta.url),
  `${JSON.stringify(downloads, null, 2)}\n`,
);
console.log(`Resolved direct DMG downloads for ${downloads.tag}.`);
