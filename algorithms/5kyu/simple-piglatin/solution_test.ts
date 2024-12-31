import {assertEquals} from "@std/assert";
import {pigIt} from "./solution.ts";

Deno.test("pigIt('Pig latin is cool')", () => {
  assertEquals(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
});

Deno.test("pigIt('Hello world !')", () => {
  assertEquals(pigIt("Hello world !"), "elloHay orldway !");
});

Deno.test("pigIt('Hello world  my !')", () => {
  assertEquals(pigIt("Hello world  my !"), "elloHay orldway  ymay !");
});
