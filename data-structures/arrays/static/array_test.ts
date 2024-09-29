import {assertEquals, assertThrows} from "@std/assert";
import {StaticArray} from "./array.ts";

Deno.test("StaticArray", () => {
  const staticArray = new StaticArray<number>(5);
  staticArray.set(0, 1);
  staticArray.set(1, 2);
  staticArray.set(2, 3);
  staticArray.set(3, 4);
  staticArray.set(4, 5);
  assertEquals(staticArray.get(0), 1);
  assertEquals(staticArray.get(1), 2);
  assertEquals(staticArray.get(2), 3);
  assertEquals(staticArray.get(3), 4);
  assertEquals(staticArray.get(4), 5);

  // Test index out of bounds
  assertThrows(() => staticArray.set(5, 6), "Index out of bounds");
});
