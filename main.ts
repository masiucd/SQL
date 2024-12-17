// function formatWords(words: string[]) {
//   let len = words.length;
//   if (len > 2) {
//     let last = words.pop() as string;
//     words.push("and");
//     words.push(last);
//     console.log(words);
//     return words.join(" ");
//   }
// }

// let result = formatWords(["ninja", "samurai", "ronin"]);
// console.log(result); // "ninja, samurai and ronin"
// // ['ninja', '', 'ronin'] --> "ninja and ronin"

// // function swap(words: string[]){
// //   let temp = words[]
// // }

// function calculateHypotenuse(a: number, b: number) {
//   if (isNaN(a) || isNaN(b)) throw new Error();
//   if (typeof a !== "number" || typeof b !== "number") throw new Error();
//   if (a <= 0 || b <= 0) throw new Error();
//   return Number(Math.sqrt(a ** 2 + b ** 2).toFixed(3));
// }

// // formula to calculate the hypotenuse of a right triangle
// // c = sqrt(a^2 + b^2)

// console.log(calculateHypotenuse(1, 1)); // 5

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
