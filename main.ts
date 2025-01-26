import {isAlphabeticCharacter} from "@dsajs/lib";

let a = "Pig latin is cool";

let res = a.replace(/\w+/g, (word) => {
  if (word.split("").every(isAlphabeticCharacter)) {
    let firstLetter = word[0];
    if (firstLetter) {
      word = word.slice(1) + firstLetter + "ay";
    }
  }
  return word;
});

console.log(res); // "igPay atinlay siay oolcay"
