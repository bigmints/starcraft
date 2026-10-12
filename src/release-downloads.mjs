export const latestReleaseApi =
  'https://api.github.com/repos/bigmints/starcraft/releases/latest';

/** Only accept complete, published DMG pairs from this repository. */
export function parseReleaseDownloads(value) {
  if (
    !value ||
    typeof value !== 'object' ||
    value.draft !== false ||
    value.prerelease !== false ||
    typeof value.tag_name !== 'string' ||
    !/^app-v\d+\.\d+\.\d+$/.test(value.tag_name) ||
    !Array.isArray(value.assets)
  )
    return null;
  const version = value.tag_name.slice(5);
  const result = { tag: value.tag_name, arm64: '', x64: '' };
  for (const architecture of ['arm64', 'x64']) {
    const name = `Starcraft-${version}-${architecture}.dmg`;
    const matches = value.assets.filter((asset) => asset?.name === name);
    if (matches.length !== 1) return null;
    const expected = `https://github.com/bigmints/starcraft/releases/download/${value.tag_name}/${name}`;
    if (
      matches[0].browser_download_url !== expected ||
      matches[0].state !== 'uploaded' ||
      !(matches[0].size > 0)
    )
      return null;
    result[architecture] = expected;
  }
  return result;
}
