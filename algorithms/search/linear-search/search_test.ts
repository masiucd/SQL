import {assertEquals} from "@std/assert";
import {linearSearch} from "./search.ts";

Deno.test(function testLinearSearch() {
  assertEquals(linearSearch([1, 2, 3], 2), 1);
  assertEquals(linearSearch([1, 2, 3], 3), 2);
  assertEquals(linearSearch([1, 2, 3], 4), -1);
});
