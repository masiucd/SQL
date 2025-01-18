export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    let right = arr
      .slice(i + 1, arr.length)
      .reduce((acc, curr) => acc + curr, 0);
    if (left === right) return i;
  }
  return -1;
}
