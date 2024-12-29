import {assert} from "@std/assert";
import {findDup, findDupV2} from "./solution.ts";

Deno.test("findDup([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]) should return 5", () => {
  assert(findDup([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]) === 5);
  assert(findDupV2([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]) === 5);
});

Deno.test(
  "findDup([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return -Infinity",
  () => {
    assert(findDup([1, 2, 3, 4, 5, 6, 7, 8, 9]) === -Infinity);
    assert(findDupV2([1, 2, 3, 4, 5, 6, 7, 8, 9]) === -Infinity);
  }
);
