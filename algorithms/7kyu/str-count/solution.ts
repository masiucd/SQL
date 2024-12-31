export function strCount(str: string, letter: string): number {
  return str.split("").filter((x) => x === letter).length;
}

export function strCountV2(str: string, letter: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
