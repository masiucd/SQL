export function findMissingLetter(array: string[]): string {
  let seq = array.map((n) => n.charCodeAt(0));
  let res = -1;
  for (let i = 0; i < seq.length - 1; i++) {
    let diff = seq[i + 1] - seq[i];
    if (diff > 1) {
      res = seq[i] + 1;
    }
  }
  return String.fromCharCode(res);
}
