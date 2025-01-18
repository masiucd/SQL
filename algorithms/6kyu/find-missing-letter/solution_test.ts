import {assertEquals} from "@std/assert/equals";
import {findMissingLetter} from "./solution.ts";

Deno.test("Test findMissingLetter", () => {
  assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
  assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
  assertEquals(findMissingLetter(["b", "d"]), "c");
  assertEquals(findMissingLetter(["a", "b", "d"]), "c");
  assertEquals(findMissingLetter(["b", "d", "e"]), "c");
});
