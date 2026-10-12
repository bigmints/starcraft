import test from 'node:test';
import assert from 'node:assert/strict';
import { parseReleaseDownloads } from '../src/release-downloads.mjs';

function release(version = '0.2.0') {
  const tag_name = `app-v${version}`;
  return {
    tag_name,
    draft: false,
    prerelease: false,
    assets: ['arm64', 'x64'].map((arch) => {
      const name = `Starcraft-${version}-${arch}.dmg`;
      return {
        name,
        state: 'uploaded',
        size: 123,
        browser_download_url: `https://github.com/bigmints/starcraft/releases/download/${tag_name}/${name}`,
      };
    }),
  };
}

test('resolves both architectures from a newer release without hardcoded filenames', () => {
  const downloads = parseReleaseDownloads(release('1.20.3'));
  assert.equal(downloads.tag, 'app-v1.20.3');
  assert.ok(downloads.arm64.endsWith('/Starcraft-1.20.3-arm64.dmg'));
  assert.ok(downloads.x64.endsWith('/Starcraft-1.20.3-x64.dmg'));
});

test('rejects unpublished, incomplete, duplicate, or mismatched release assets', () => {
  for (const mutate of [
    (r) => {
      r.draft = true;
    },
    (r) => {
      r.prerelease = true;
    },
    (r) => {
      r.assets.pop();
    },
    (r) => {
      r.assets.push(r.assets[0]);
    },
    (r) => {
      r.assets[0].state = 'starter';
    },
    (r) => {
      r.assets[0].size = 0;
    },
    (r) => {
      r.assets[0].name = 'Starcraft-0.1.0-arm64.dmg';
    },
  ]) {
    const value = release();
    mutate(value);
    assert.equal(parseReleaseDownloads(value), null);
  }
});

test('rejects untrusted destinations and malformed API responses', () => {
  for (const url of [
    'javascript:alert(1)',
    'https://example.com/installer.dmg',
    'https://github.com/another/repo/releases/download/app-v0.2.0/Starcraft-0.2.0-arm64.dmg',
  ]) {
    const value = release();
    value.assets[0].browser_download_url = url;
    assert.equal(parseReleaseDownloads(value), null);
  }
  for (const value of [null, {}, [], 'release', { ...release(), assets: null }])
    assert.equal(parseReleaseDownloads(value), null);
});
