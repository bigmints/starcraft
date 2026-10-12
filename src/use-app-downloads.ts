'use client';

import { useEffect, useState } from 'react';
import publishedDownloads from './downloads.json';
import {
  latestReleaseApi,
  parseReleaseDownloads,
} from './release-downloads.mjs';

export function useAppDownloads() {
  const [downloads, setDownloads] = useState(publishedDownloads);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    fetch(latestReleaseApi, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((release) => {
        const latest = parseReleaseDownloads(release);
        if (latest && !controller.signal.aborted) setDownloads(latest);
      })
      // The build's verified direct links remain usable offline or when rate limited.
      .catch(() => {})
      .finally(() => window.clearTimeout(timeout));
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);
  return downloads;
}
