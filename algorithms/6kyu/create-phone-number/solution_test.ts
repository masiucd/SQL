import {createPhoneNumber, createPhoneNumberV2} from "./solution.ts";
import {assertEquals} from "@std/assert";

Deno.test(
  "Create Phone Number 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 = (123) 456-7890",
  () => {
    let got = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    let want = "(123) 456-7890";
    assertEquals(got, want);

    got = createPhoneNumberV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    assertEquals(got, want);
  }
);

Deno.test(
  "Create Phone Number 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 = (111) 111-1111",
  () => {
    let got = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    let want = "(111) 111-1111";
    assertEquals(got, want);

    got = createPhoneNumberV2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    assertEquals(got, want);
  }
);
