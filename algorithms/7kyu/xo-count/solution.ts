export function xoCount(input: string) {
  let xoCount = new Map();
  for (let x of input
    .split("")
    .map((x) => x.toLowerCase())
    .filter((x) => x === "x" || x === "o")) {
    if (!xoCount.has(x)) {
      xoCount.set(x, 1);
    } else {
      xoCount.set(x, xoCount.get(x) + 1);
    }
  }

  let xCount = xoCount.get("x");
  return xCount === xoCount.get("o");
}

export function xoCountV2(input: string) {
  let list1 = input.split("").filter((x) => x.toLowerCase() === "x");
  let list2 = input.split("").filter((x) => x.toLowerCase() === "o");
  return list1.length === list2.length;
}
