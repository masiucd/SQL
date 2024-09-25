function compress(chars: string[]): number {
  let charCount = new Map<string, number>();
  for (let char of chars) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let result = [];
  for (let [char, count] of charCount) {
    result.push(char);
    if (count > 1) {
      result.push(count.toString());
    }
    if (Number(char) > 9) {
      result.push(...char.split(""));
    }
  }
  for (let i = 0; i < result.length; i++) {
    chars[i] = result[i];
  }
  return result.length;
}

let xs = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(xs));
console.log(xs);
// console.log(compress(["a"])) // 1
// console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])) // 4
