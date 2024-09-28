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

export function updateInventoryV2(
  currentInventory: [number, string][],
  newInventory: [number, string][]
): [number, string][] {
  const inventory = new Map<string, number>();

  // Update inventory with current items
  for (const [quantity, item] of currentInventory) {
    inventory.set(item, quantity);
  }

  // Update inventory with new items
  for (const [quantity, item] of newInventory) {
    inventory.set(item, (inventory.get(item) || 0) + quantity);
  }

  // Convert Map to array and sort by item name
  return Array.from(inventory.entries())
    .map(([item, quantity]): [number, string] => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
