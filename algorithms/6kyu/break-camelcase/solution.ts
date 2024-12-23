export function breakCamelCase(input: string) {
  if (input.length === 0) {
    return "";
  }
  let res = input[0];
  for (let i = 1; i < input.length; i++) {
    if (isCapitalLetter(input[i])) {
      res += ` ${input[i]}`;
    } else {
      res += input[i];
    }
  }
  return res;
}

function isCapitalLetter(letter: string) {
  for (let i = 65; i <= 90; i++) {
    if (letter.charCodeAt(0) === i) {
      return true;
    }
  }
  return false;
}
