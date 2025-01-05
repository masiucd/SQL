import {assertEquals} from "@std/assert";
import {persistence} from "./solution.ts";

Deno.test("39 = 3 times", () => {
  let got = persistence(39);
  let want = 3;
  assertEquals(got, want);
});

Deno.test("4 = 0 times", () => {
  let got = persistence(4);
  let want = 0;
  assertEquals(got, want);
});

Deno.test("25 = 2 times", () => {
  let got = persistence(25);
  let want = 2;
  assertEquals(got, want);
});

Deno.test("999 = 4 times", () => {
  let got = persistence(999);
  let want = 4;
  assertEquals(got, want);
});
