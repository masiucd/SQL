import {assertEquals} from "@std/assert";
import {highAndLow} from "./solution.ts";

Deno.test("4 5 29 = 29 4", () => {
  assertEquals(highAndLow("4 5 29"), "29 4");
});

Deno.test("10 2 -2 -10 = 10 -10", () => {
  assertEquals(highAndLow("10 2 -2 -10"), "10 -10");
});
