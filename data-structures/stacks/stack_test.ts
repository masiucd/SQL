import {assertEquals} from "@std/assert";
import {Stack} from "./stack.ts";

Deno.test("Stack", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);

  assertEquals(stack.getSize(), 5);

  assertEquals(stack.pop(), 5);
  assertEquals(stack.getSize(), 4);
  assertEquals(stack.peek(), 4);
  assertEquals(stack.getSize(), 4);
  assertEquals(stack.isEmpty(), false);
  // assertEquals(stack.clear(), undefined);
  // assertEquals(stack.getSize(), 0);
  // assertEquals(stack.isEmpty(), true);
});
