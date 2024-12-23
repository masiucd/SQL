import {assertEquals} from "@std/assert";
import {addBinary, addBinaryV2} from "./solution.ts";

Deno.test("2 in binary -> 10", () => {
  assertEquals(addBinary(1, 1), "10");
  assertEquals(addBinaryV2(1, 1), "10");
});

Deno.test("3 in binary -> 11", () => {
  assertEquals(addBinary(1, 2), "11");
  assertEquals(addBinaryV2(1, 2), "11");
});

Deno.test("63 in binary -> 111111", () => {
  assertEquals(addBinary(51, 12), "111111");
  assertEquals(addBinaryV2(51, 12), "111111");
});
