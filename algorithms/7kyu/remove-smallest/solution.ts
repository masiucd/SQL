export function removeSmallest(numbers: number[]) {
  if (numbers.length === 0) return [];
  let smallest = Math.min(...numbers);
  let smallestIndex = numbers.findIndex((n) => n === smallest);
  let result = numbers.filter((_, i) => i !== smallestIndex);
  return result;
}
