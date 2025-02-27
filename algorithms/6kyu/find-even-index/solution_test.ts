import {assertEquals} from "@std/assert/equals";
import {findEvenIndex} from "./solution.ts";

Deno.test("[1,2,3,4,3,2,1] should return 3", () => {
  const result = findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
  assertEquals(result, 3);
});

Deno.test("[1,100,50,-51,1,1] should return 1", () => {
  const result = findEvenIndex([1, 100, 50, -51, 1, 1]);
  assertEquals(result, 1);
});

Deno.test("[1,2,3,4,5,6] should return -1", () => {
  const result = findEvenIndex([1, 2, 3, 4, 5, 6]);
  assertEquals(result, -1);
});
