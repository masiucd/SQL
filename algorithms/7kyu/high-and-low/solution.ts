export function highAndLow(numbers: string) {
  let xs = numbers.split(" ").map(Number);
  let min = Math.min(...xs);
  let max = Math.max(...xs);
  return `${max} ${min}`;
}
