import {assertEquals} from "@std/assert/equals";
import {makeParts, makePartsV2} from "./solution.ts";

Deno.test("[1, 2, 3, 4, 5], 2", () => {
  assertEquals(makeParts([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assertEquals(makePartsV2([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

Deno.test("[1, 2, 3, 4, 5, 6, 7, 8, 9], 3", () => {
  assertEquals(makeParts([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  assertEquals(makePartsV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
