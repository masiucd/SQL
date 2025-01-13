import {assertEquals} from "@std/assert/equals";
import {isAnagram} from "./solution.ts";

Deno.test("Anagram Detection", () => {
  assertEquals(isAnagram("foefet", "toffee"), true);
  assertEquals(isAnagram("Buckethead", "DeathCubeK"), true);
  assertEquals(isAnagram("Twoo", "WooT"), true);
  assertEquals(isAnagram("dumble", "bumble"), false);
  assertEquals(isAnagram("ound", "round"), false);
  assertEquals(isAnagram("apple", "pale"), false);
});
