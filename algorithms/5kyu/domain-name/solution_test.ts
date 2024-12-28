import {assertEquals} from "@std/assert";
import {domainName} from "./solution.ts";

Deno.test("Should return 'google'", () => {
  assertEquals(domainName("http://google.com"), "google");
});

Deno.test("Should return 'google'", () => {
  assertEquals(domainName("http://google.co.jp"), "google");
});

Deno.test("Should return 'interia'", () => {
  assertEquals(domainName("www.interia.pl"), "interia");
});

Deno.test("Should return 'youtube'", () => {
  assertEquals(domainName("https://youtube.com"), "youtube");
});

Deno.test("Should return 'codewars'", () => {
  assertEquals(domainName("https://www.codewars.com/kata"), "codewars");
});
