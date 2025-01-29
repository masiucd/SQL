function makeParts(arr: number[], chunkSize: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let xs = arr.slice(i, i + chunkSize);
    result.push(xs);
  }
  return result;
}

console.log(makeParts([1, 2, 3, 4, 5], 2));
console.log(makeParts([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(makeParts([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
