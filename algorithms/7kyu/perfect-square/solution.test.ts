import {assertEquals} from "@std/assert";

import {isSquare, isSquareV2} from "./solution.ts";

Deno.test("Test 1", () => {
  assertEquals(isSquare(-1), false);
  assertEquals(isSquareV2(-1), false);
});

Deno.test("Test 2", () => {
  assertEquals(isSquare(0), true);
  assertEquals(isSquareV2(0), true);
});

Deno.test("Test 3", () => {
  assertEquals(isSquare(3), false);
  assertEquals(isSquareV2(3), false);
});

Deno.test("Test 4", () => {
  assertEquals(isSquare(4), true);
  assertEquals(isSquareV2(4), true);
});

Deno.test("Test 5", () => {
  assertEquals(isSquare(25), true);
  assertEquals(isSquareV2(25), true);
});

Deno.test("Test 6", () => {
  assertEquals(isSquare(26), false);
  assertEquals(isSquareV2(26), false);
});
