export function binaryToNumber(xs: number[]) {
  let result = 0;
  for (let x of xs) {
    result = (result << 1) | x;
  }
  return result;
}
