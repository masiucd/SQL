export function linearSearch(nums: number[], target: number) {
  for (let [i, n] of nums.entries()) {
    if (n === target) {
      return i;
    }
  }
  return -1;
}
