export function longest(s1: string, s2: string) {
  return Array.from(new Set([...s1, ...s2]))
    .sort()
    .join("");
}

export function longestV2(s1: string, s2: string) {
  return [...new Set(s1 + s2)].sort().join("");
}
