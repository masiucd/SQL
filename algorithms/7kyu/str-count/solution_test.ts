import {assertEquals} from "@std/assert";
import {strCount, strCountV2} from "./solution.ts";

Deno.test("strCount('Hello', 'o') should return 1", () => {
  assertEquals(strCount("Hello", "o"), 1);
  assertEquals(strCountV2("Hello", "o"), 1);
});

Deno.test("strCount('Hello', 'l') should return 2", () => {
  assertEquals(strCount("Hello", "l"), 2);
  assertEquals(strCountV2("Hello", "l"), 2);
});

Deno.test("strCount('Hello', 'z') should return 0", () => {
  assertEquals(strCount("Hello", "z"), 0);
  assertEquals(strCountV2("Hello", "z"), 0);
});
