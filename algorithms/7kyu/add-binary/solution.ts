export function addBinary(a: number, b: number) {
  return (a + b).toString(2);
}

export function addBinaryV2(a: number, b: number) {
  let sum = a + b;
  let binary = "";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  return binary || "0";
}
