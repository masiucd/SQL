import {assertEquals} from "@std/assert";
import {arrayDiff} from "./solution.ts";

Deno.test("Test 1", () => {
  assertEquals(arrayDiff([1, 2], [1]), [2]);
});

Deno.test("Test 2", () => {
  assertEquals(arrayDiff([1, 2, 2], [1]), [2, 2]);
});

Deno.test("Test 3", () => {
  assertEquals(arrayDiff([1, 2, 2], [2]), [1]);
});

Deno.test("Test 4", () => {
  assertEquals(arrayDiff([1, 2, 2], []), [1, 2, 2]);
});
