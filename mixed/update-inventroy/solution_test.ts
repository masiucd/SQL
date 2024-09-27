import {assertEquals} from "@std/assert";
import {updateInventory, updateInventoryV2} from "./solution.ts";

Deno.test(function updateInventoryTest() {
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

  assertEquals(
    updateInventoryV2(
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
});

Deno.test(function updateInventoryTest2() {
  assertEquals(
    updateInventory(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      []
    ),
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ]
  );

  // Add test for updateInventoryV2
  assertEquals(
    updateInventoryV2(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      []
    ),
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ]
  );
});

Deno.test(function updateInventoryEdgeCases() {
  // Test with empty current inventory
  assertEquals(
    updateInventory(
      [],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
      ]
    ),
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
    ]
  );

  // Test with identical inventories
  assertEquals(
    updateInventory(
      [
        [1, "Bowling Ball"],
        [2, "Dirty Sock"],
      ],
      [
        [1, "Bowling Ball"],
        [2, "Dirty Sock"],
      ]
    ),
    [
      [2, "Bowling Ball"],
      [4, "Dirty Sock"],
    ]
  );

  // Test with negative quantities
  assertEquals(
    updateInventory(
      [
        [3, "Bowling Ball"],
        [2, "Dirty Sock"],
      ],
      [
        [-1, "Bowling Ball"],
        [-3, "Dirty Sock"],
      ]
    ),
    [
      [2, "Bowling Ball"],
      [-1, "Dirty Sock"],
    ]
  );
});
