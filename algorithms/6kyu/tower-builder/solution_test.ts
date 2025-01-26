import {assertEquals} from "@std/assert/equals";
import {towerBuilder} from "./solution.ts";

Deno.test("1 = ['*']", () => {
  assertEquals(towerBuilder(1), ["*"]);
});

Deno.test("2 = [' * ', '***']", () => {
  assertEquals(towerBuilder(2), [" * ", "***"]);
});

Deno.test("3 = ['  *  ', ' *** ', '*****']", () => {
  assertEquals(towerBuilder(3), ["  *  ", " *** ", "*****"]);
});

Deno.test("4 = ['   *   ', '  ***  ', ' ***** ', '*******']", () => {
  assertEquals(towerBuilder(4), ["   *   ", "  ***  ", " ***** ", "*******"]);
});

Deno.test(
  "5 = ['    *    ', '   ***   ', '  *****  ', ' ******* ', '*********']",
  () => {
    assertEquals(towerBuilder(5), [
      "    *    ",
      "   ***   ",
      "  *****  ",
      " ******* ",
      "*********",
    ]);
  }
);

Deno.test(
  "6 = ['     *     ', '    ***    ', '   *****   ', '  *******  ', ' ********* ', '***********']",
  () => {
    assertEquals(towerBuilder(6), [
      "     *     ",
      "    ***    ",
      "   *****   ",
      "  *******  ",
      " ********* ",
      "***********",
    ]);
  }
);
