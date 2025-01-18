import {assertEquals} from "@std/assert/equals";
import {uniqueInOrder, uniqueInOrderV2} from "./solution.ts";

Deno.test("Test uniqueInOrder", () => {
  assertEquals(uniqueInOrder("AAAABBBCCDAABBB"), [
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
  ]);
  assertEquals(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
  assertEquals(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
});

Deno.test("Test uniqueInOrderV2", () => {
  assertEquals(uniqueInOrderV2("AAAABBBCCDAABBB"), [
    "A",
    "B",
    "C",
    "D",
    "A",
    "B",
  ]);
  assertEquals(uniqueInOrderV2("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
  assertEquals(uniqueInOrderV2([1, 2, 2, 3, 3]), [1, 2, 3]);
});
