import {assertEquals} from "@std/assert";
import {binarySearch} from "./search.ts";

Deno.test(function binarySearchTest() {
  assertEquals(binarySearch([1, 2, 3, 4], 3), 2);
  assertEquals(binarySearch([1, 2, 3, 4], 33), -1);
});
