import {assertEquals} from "@std/assert";
import {binaryToNumber} from "./solution.ts";

Deno.test("Test 1", () => {
  let got = binaryToNumber([0, 0, 0, 1]);
  let want = 1;
  assertEquals(got, want);
});

Deno.test("Test 2", () => {
  let got = binaryToNumber([0, 0, 1, 0]);
  let want = 2;
  assertEquals(got, want);
});

Deno.test("Test 3", () => {
  let got = binaryToNumber([0, 1, 0, 1]);
  let want = 5;
  assertEquals(got, want);
});

Deno.test("Test 4", () => {
  let got = binaryToNumber([1, 0, 0, 1]);
  let want = 9;
  assertEquals(got, want);
});

Deno.test("Test 5", () => {
  let got = binaryToNumber([0, 0, 1, 0]);
  let want = 2;
  assertEquals(got, want);
});
