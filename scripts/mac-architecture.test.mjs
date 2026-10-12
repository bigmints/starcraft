import test from 'node:test';
import assert from 'node:assert/strict';
import {
  architectureFromHints,
  detectMacArchitecture,
} from '../src/mac-architecture.mjs';

test('selects the right Mac DMG from explicit 64-bit client hints', () => {
  assert.equal(
    architectureFromHints({
      platform: 'macOS',
      architecture: 'arm',
      bitness: '64',
    }),
    'arm64',
  );
  assert.equal(
    architectureFromHints({
      platform: 'macOS',
      architecture: 'x86',
      bitness: '64',
    }),
    'x64',
  );
});

test('asks for a choice for other platforms, missing data, and unsupported CPUs', () => {
  for (const hints of [
    null,
    {},
    { platform: 'Windows', architecture: 'arm', bitness: '64' },
    { platform: 'macOS', architecture: 'arm' },
    { platform: 'macOS', architecture: 'x86', bitness: '32' },
    { platform: 'macOS', architecture: 'unknown', bitness: '64' },
  ])
    assert.equal(architectureFromHints(hints), null);
});

test('does not mistake an Apple Silicon browser’s Intel user agent for Intel hardware', async () => {
  assert.equal(
    await detectMacArchitecture({
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      platform: 'MacIntel',
    }),
    null,
  );
  assert.equal(
    await detectMacArchitecture({
      userAgentData: {
        getHighEntropyValues: async () => ({
          platform: 'macOS',
          architecture: 'arm',
          bitness: '64',
        }),
      },
    }),
    'arm64',
  );
});

test('falls back when client hints are blocked or never resolve', async () => {
  assert.equal(
    await detectMacArchitecture({
      userAgentData: {
        getHighEntropyValues: () => {
          throw new Error('blocked');
        },
      },
    }),
    null,
  );
  assert.equal(
    await detectMacArchitecture({
      userAgentData: {
        getHighEntropyValues: async () => {
          throw new Error('denied');
        },
      },
    }),
    null,
  );
  assert.equal(
    await detectMacArchitecture({
      userAgentData: { getHighEntropyValues: () => new Promise(() => {}) },
    }),
    null,
  );
});
