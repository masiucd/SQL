/**
 * Creates a formatted phone number string from an array of numbers.
 * The format of the phone number is (XXX) XXX-XXXX.
 *
 * @param {number[]} numbers - An array of numbers representing the phone number digits.
 * @returns {string} The formatted phone number string.
 */
export function createPhoneNumber(numbers: number[]): string {
  let xs = numbers.map((n) => n.toString());
  let result = "(";
  for (let i = 0; i < xs.length; i++) {
    if (i <= 2) {
      result += xs[i];
      if (i === 2) {
        result += ")";
      }
    } else if (i > 2 && i <= 5) {
      if (i === 3) {
        result += " ";
      }
      result += xs[i];
      if (i === 5) {
        result += "-";
      }
    } else {
      result += xs[i];
    }
  }
  return result;
}

/**
 * Creates a formatted phone number string from an array of numbers.
 * The format of the phone number is (XXX) XXX-XXXX.
 *
 * @param {number[]} numbers - An array of numbers representing the phone number digits.
 * @returns {string} The formatted phone number string.
 */
export function createPhoneNumberV2(numbers: number[]): string {
  const codeOfCountry = numbers.slice(0, 3).join("");
  const middleNumbers = numbers.slice(3, 6).join("");
  const lastNumbers = numbers.slice(6, 10).join("");

  return `(${codeOfCountry}) ${middleNumbers}-${lastNumbers}`;
}
