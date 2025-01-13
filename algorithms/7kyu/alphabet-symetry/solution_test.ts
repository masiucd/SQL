import {assertEquals} from "@std/assert/equals";
import {alphabetSymmetry} from "./solution.ts";

Deno.test("Alphabet Symmetry should return [4 3 1]", () => {
  let got = alphabetSymmetry(["abode", "ABc", "xyzD"]);
  let want = [4, 3, 1];
  assertEquals(got, want);
});

Deno.test("Alphabet Symmetry should return [4, 3, 0]", () => {
  let got = alphabetSymmetry(["abide", "ABc", "xyz"]);
  let want = [4, 3, 0];
  assertEquals(got, want);
});

Deno.test("Alphabet Symmetry should return [3, 3, 3]", () => {
  let got = alphabetSymmetry(["abc", "Abc", "aBC"]);
  let want = [3, 3, 3];
  assertEquals(got, want);
});
