import {assertEquals} from "@std/assert";
import {longest, longestV2} from "./solution.ts";

Deno.test("longest", () => {
  let got = longest("aretheyhere", "yestheyarehere");
  let want = "aehrsty";
  assertEquals(got, want);

  got = longest("loopingisfunbutdangerous", "lessdangerousthancoding");
  want = "abcdefghilnoprstu";
  assertEquals(got, want);

  got = longest("inmanylanguages", "theresapairoffunctions");
  want = "acefghilmnoprstuy";
  assertEquals(got, want);
});

Deno.test("longestV2", () => {
  let got = longestV2("aretheyhere", "yestheyarehere");
  let want = "aehrsty";
  assertEquals(got, want);

  got = longestV2("loopingisfunbutdangerous", "lessdangerousthancoding");
  want = "abcdefghilnoprstu";
  assertEquals(got, want);

  got = longestV2("inmanylanguages", "theresapairoffunctions");
  want = "acefghilmnoprstuy";
  assertEquals(got, want);
});
