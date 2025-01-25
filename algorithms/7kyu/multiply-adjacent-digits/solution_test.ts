import {assertEquals} from "@std/assert/equals";
import {digitMultiplication} from "./solution.ts";

Deno.test("53+5 = 20", () => {
  assertEquals(digitMultiplication("53+5"), 20);
});

Deno.test("266-66 = 36", () => {
  assertEquals(digitMultiplication("266-66"), 36);
});

Deno.test("1234 = 24", () => {
  assertEquals(digitMultiplication("1234"), 24);
});
