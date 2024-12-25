export function arrayDiff(a: number[], b: number[]) {
  return a.filter((e) => !b.includes(e));
}
