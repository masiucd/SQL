export function persistence(num: number): number {
  let count = 0;
  while (num > 9) {
    num = calculateProductV2(num);
    count++;
  }
  return count;
}

function calculateProduct(n: number) {
  let numS = n.toString();
  let product = 1;
  for (let ns of numS) {
    let num = parseInt(ns, 10);
    if (num > 0) {
      product *= num;
    }
  }
  return product;
}

function calculateProductV2(n: number) {
  return n
    .toString()
    .split("")
    .reduce((product, digit) => product * parseInt(digit, 10), 1);
}
