import {assert, assertFalse} from "@std/assert";
import {validatePIN} from "./solution.ts";

Deno.test("1234 is a valid PIN", () => {
  assert(validatePIN("1234"));
});

Deno.test("12345 is not a valid PIN", () => {
  assertFalse(validatePIN("12345"));
});

Deno.test("a234 is not a valid PIN", () => {
  assertFalse(validatePIN("a234"));
});

Deno.test("1234.5 is not a valid PIN", () => {
  assertFalse(validatePIN("1234.5"));
});

Deno.test("123456 is a valid PIN", () => {
  assert(validatePIN("123456"));
});
