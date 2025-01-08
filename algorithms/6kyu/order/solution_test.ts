import {assertEquals} from "@std/assert/equals";
import {order} from "./solution.ts";

Deno.test("is2 Thi1s T4est 3a = Thi1s is2 3a T4est", () => {
  assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
});

Deno.test(
  "4of Fo1r pe6ople g3ood th5e the2 = Fo1r the2 g3ood 4of th5e pe6ople",
  () => {
    assertEquals(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
  }
);

Deno.test("empty string", () => {
  assertEquals(order(""), "");
});

Deno.test("1", () => {
  assertEquals(order("1"), "1");
});

Deno.test("1 2", () => {
  assertEquals(order("1 2"), "1 2");
});
