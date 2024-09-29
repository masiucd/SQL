function pairwise(arr: number[], arg: number) {
  if (arr.length === 0) return 0;
  let result = 0;
  let banned = new Set();
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let innerElement = arr[j];
      if (element + innerElement === arg && !banned.has(i)) {
        result += i + j;
        banned.add(i);
        break;
      }
    }
  }
  return result;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
