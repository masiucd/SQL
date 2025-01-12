import {assertEquals} from "@std/assert/equals";
import {removeSmallest} from "./solution.ts";

Deno.test("Remove Smallest should return [2, 3, 4, 5]", () => {
  let got = removeSmallest([1, 2, 3, 4, 5]);
  let want = [2, 3, 4, 5];
  assertEquals(got, want);
});

Deno.test("Remove Smallest should return [5, 3, 2, 4]", () => {
  let got = removeSmallest([5, 3, 2, 1, 4]);
  let want = [5, 3, 2, 4];
  assertEquals(got, want);
});

Deno.test("Remove Smallest should return [2, 2, 2, 1]", () => {
  let got = removeSmallest([2, 2, 1, 2, 1]);
  let want = [2, 2, 2, 1];
  assertEquals(got, want);
});
