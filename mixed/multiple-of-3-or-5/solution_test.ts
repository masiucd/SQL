import {assertEquals} from "@std/assert";
import {multiplesOf3Or5} from "./solution.ts";

Deno.test(function multiplesOf3Or5Test() {
  assertEquals(multiplesOf3Or5(10), 23);
  assertEquals(multiplesOf3Or5(49), 543);
  assertEquals(multiplesOf3Or5(19564), 89301183);
});
