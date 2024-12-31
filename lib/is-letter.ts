/**
 * Checks if the given character is an alphabetic character (A-Z or a-z).
 *
 * @param character - The character to check.
 * @returns `true` if the character is alphabetic, `false` otherwise.
 */
export function isAlphabeticCharacter(character: string): boolean {
  const alphabeticCharCodes = new Array(122 - 64)
    .fill(0)
    .map((_, i) => i + 64 + 1);
  return alphabeticCharCodes.includes(character.charCodeAt(0));
}

export function isAlphabeticCharacterV2(character: string): boolean {
  return /^[a-zA-Z]+$/.test(character);
}

/**
 * Checks if the given character is a non-alphabetic character.
 *
 * This function returns `true` if the character is not an alphabetic character
 * (i.e., not a letter from A-Z or a-z), and `false` otherwise.
 *
 * @param character - The character to check.
 * @returns `true` if the character is non-alphabetic, `false` otherwise.
 */
export function isNonAlphabeticCharacter(character: string): boolean {
  return !isAlphabeticCharacter(character);
}
