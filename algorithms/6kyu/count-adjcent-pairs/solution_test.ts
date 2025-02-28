import { assertEquals } from "@std/assert/equals";
import { countAdjacentPairs } from "./solution.ts";

Deno.test('countAdjacentPairs("dog dog cat cat cat cat")', () => {
	assertEquals(countAdjacentPairs("dog dog cat cat cat cat"), 2);
});

Deno.test('countAdjacentPairs("cat cat dog dog cat cat")', () => {
	assertEquals(countAdjacentPairs("cat cat dog dog cat cat"), 3);
});

Deno.test('countAdjacentPairs("pineapple apple dog cat")', () => {
	assertEquals(countAdjacentPairs("pineapple apple dog cat"), 0);
});
