export function digitMultiplication(expr: string) {
  let result = 0;
  let isAddition = true;
  let parts = expr.split(/(?=[+-])|(?<=[+-])/);
  for (let part of parts) {
    if (part === "+") {
      isAddition = true;
      continue;
    }
    if (part === "-") {
      isAddition = false;
      continue;
    }

    let product = part
      .split("")
      .map(Number)
      .reduce((acc, num) => acc * num, 1);
    if (isAddition) {
      result = result + product;
    } else {
      result = result - product;
    }
  }
  return result;
}
