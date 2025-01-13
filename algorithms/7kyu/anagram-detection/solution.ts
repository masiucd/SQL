export function isAnagram(test: string, original: string) {
  let charMap: Record<string, number> = {};
  for (let char of test) {
    let c = char.toLowerCase();
    charMap[c] ? (charMap[c] += 1) : (charMap[c] = 1);
  }
  for (let char of original) {
    let c = char.toLowerCase();
    charMap[c] -= 1;
  }
  return Object.values(charMap).every((n) => n === 0);
}
