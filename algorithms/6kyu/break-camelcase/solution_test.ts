import {assertEquals} from "@std/assert";
import {breakCamelCase} from "./solution.ts";

Deno.test("camelCase = camel Case", () => {
  assertEquals(breakCamelCase("camelCase"), "camel Case");
});

Deno.test(" empty string = '' ", () => {
  assertEquals(breakCamelCase(""), "");
});

Deno.test("camelCaseTest = camel Case Test", () => {
  assertEquals(breakCamelCase("camelCaseTest"), "camel Case Test");
});

Deno.test("helloWorldMyNameIs = hello World My Name Is", () => {
  assertEquals(breakCamelCase("helloWorldMyNameIs"), "hello World My Name Is");
});
