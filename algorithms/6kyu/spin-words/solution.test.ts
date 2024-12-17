import {assertEquals} from "@std/assert";
import {spinWords} from "./solution.ts";

Deno.test("Hey fellow warriors", () => {
  assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
});

Deno.test("This is a test", () => {
  assertEquals(spinWords("This is a test"), "This is a test");
});

Deno.test("This is another test", () => {
  assertEquals(spinWords("This is another test"), "This is rehtona test");
});
