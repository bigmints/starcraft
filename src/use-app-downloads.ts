'use client';

import { useEffect, useState } from 'react';
import { detectMacArchitecture } from './mac-architecture.mjs';
import publishedDownloads from './downloads.json';
import {
  latestReleaseApi,
  parseReleaseDownloads,
} from './release-downloads.mjs';

export function useAppDownloads() {
  const [architecture, setArchitecture] = useState<'arm64' | 'x64' | null>(
    null,
  );
  useEffect(() => {
    let active = true;
    void detectMacArchitecture(navigator).then((value) => {
      if (active) setArchitecture(value);
    });
    return () => {
      active = false;
    };
  }, []);
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
  return { ...downloads, architecture };
}
