import {assertEquals} from "@std/assert/equals";
import {toCamelCase} from "./solution.ts";

Deno.test("hello world = helloWorld", () => {
  assertEquals(toCamelCase("hello world"), "helloWorld");
});

Deno.test("the-stealth-warrior = theStealthWarrior", () => {
  assertEquals(toCamelCase("the-stealth-warrior"), "theStealthWarrior");
});

Deno.test("The_Stealth_Warrior = TheStealthWarrior", () => {
  assertEquals(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
});

Deno.test("the_stealth-warrior = theStealthWarrior", () => {
  assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
});
