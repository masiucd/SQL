export function updateInventory(
  arr1: (string | number)[][],
  arr2: (string | number)[][]
) {
  let xs1 = new Map(arr1.map(([q, i]) => [i, q]));
  let xs2 = new Map(arr2.map(([q, i]) => [i, q]));
  for (let [k, v] of xs1.entries()) {
    if (xs2.has(k)) {
      let xs2Val = xs2.get(k) as number;
      xs2.set(k, xs2Val + Number(v));
    } else {
      xs2.set(k, v);
    }
  }

  return [...xs2.entries()]
    .map(([k, v]) => [v, k])
    .sort((a, b) => (a[1] as string).localeCompare(b[1] as string));
}

// Example inventory lists
let curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

let newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

let res = updateInventory(curInv, newInv);
console.log(res);
