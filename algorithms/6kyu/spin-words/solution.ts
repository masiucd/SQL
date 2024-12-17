export function spinWords(input: string) {
  let result = [];
  for (let word of input.split(" ")) {
    if (word.length >= 5) {
      result.push(reverseWord(word));
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
}

/**
 * "Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
 */

function reverseWord(word: string) {
  let res = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
}
