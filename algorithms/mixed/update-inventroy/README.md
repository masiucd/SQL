# Update Inventory

## Examples

```ts
assertEquals(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ]
  ),
  [
    [88, "Bowling Ball"],
    [2, "Dirty Sock"],
    [3, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [5, "Microphone"],
    [7, "Toothpaste"],
  ]
);
```

## Solution

```ts
export function updateInventory(
  currentInventory: [number, string][],
  newInventory: [number, string][]
) {
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
```

```

## Explanation

We use a Map to store the inventory. We then iterate through the current inventory and update the inventory with the new items. Finally, we convert the Map to an array and sort it by the item name.

```
