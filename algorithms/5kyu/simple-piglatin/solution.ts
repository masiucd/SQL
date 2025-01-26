import {isAlphabeticCharacter} from "@dsajs/lib";

export function pigIt(a: string): string {
  let res = a.replace(/\w+/g, (word) => {
    if (word.split("").every(isAlphabeticCharacter)) {
      let firstLetter = word[0];
      if (firstLetter) {
        word = word.slice(1) + firstLetter + "ay";
      }
    }
    return word;
  });
  return res;
}
