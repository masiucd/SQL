import {assert, assertFalse} from "@std/assert";
import {xoCount, xoCountV2} from "./solution.ts";

Deno.test("xo = true", () => {
  assert(xoCount("xo"));
  assert(xoCountV2("xo"));
});

Deno.test("xxOo = true", () => {
  assert(xoCount("xxOo"));
  assert(xoCountV2("xxOo"));
});

Deno.test("xxxm = false", () => {
  assertFalse(xoCount("xxxm"));
  assertFalse(xoCountV2("xxxm"));
});

Deno.test("Oo = false", () => {
  assertFalse(xoCount("Oo"));
  assertFalse(xoCountV2("Oo"));
});

Deno.test("ooom = false", () => {
  assertFalse(xoCount("ooom"));
  assertFalse(xoCountV2("ooom"));
});

Deno.test("zzoo = false", () => {
  assertFalse(xoCount("zzoo"));
  assertFalse(xoCountV2("zzoo"));
});
