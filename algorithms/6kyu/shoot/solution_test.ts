import {assertEquals} from "@std/assert";
import {shoot} from "./solution.ts";

Deno.test("Pete wins", () => {
  let got = shoot([
    [{P1: "XX", P2: "XO"}, true],
    [{P1: "OX", P2: "OO"}, true],
    [{P1: "XX", P2: "OX"}, false],
  ]);
  let want = "Pete Wins!";

  assertEquals(got, want);
});

Deno.test("Phil wins", () => {
  let got = shoot([
    [{P1: "XO", P2: "XX"}, false],
    [{P1: "OX", P2: "XO"}, false],
    [{P1: "XX", P2: "XX"}, true],
  ]);
  let want = "Phil Wins!";
  assertEquals(got, want);
});

Deno.test("Draw", () => {
  let got = shoot([
    [{P1: "XX", P2: "XX"}, true],
    [{P1: "OO", P2: "OO"}, false],
    [{P1: "OX", P2: "OX"}, true],
  ]);
  let want = "Draw!";
  assertEquals(got, want);
});
