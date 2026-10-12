/** Use explicit client hints only; macOS user-agent strings often say Intel on ARM. */
export function architectureFromHints(hints) {
  if (hints?.platform !== 'macOS' || hints.bitness !== '64') return null;
  if (hints.architecture === 'arm') return 'arm64';
  if (hints.architecture === 'x86') return 'x64';
  return null;
}

export async function detectMacArchitecture(browser) {
  if (typeof browser?.userAgentData?.getHighEntropyValues !== 'function')
    return null;
  let timeout;
  try {
    const hints = await Promise.race([
      browser.userAgentData.getHighEntropyValues([
        'platform',
        'architecture',
        'bitness',
      ]),
      new Promise((resolve) => {
        timeout = setTimeout(() => resolve(null), 1500);
      }),
    ]);
    return architectureFromHints(hints);
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
