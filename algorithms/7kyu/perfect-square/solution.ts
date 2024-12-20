export function isSquare(n: number) {
  if (n === 0) return true;
  let squared = Math.sqrt(n);
  return squared === Math.floor(squared);
}

export function isSquareV2(n: number) {
  return Number.isInteger(Math.sqrt(n));
}
