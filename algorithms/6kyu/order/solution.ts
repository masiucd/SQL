export function order(words: string): string {
  let xs = [];
  for (let word of words.split(" ")) {
    let digit = getDigitFromWord(word);
    xs[digit - 1] = word;
  }
  return xs.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"

function getDigitFromWord(word: string) {
  let re = /\d/;
  let match = word.match(re);
  return match ? parseInt(match[0], 10) : -1;
}
