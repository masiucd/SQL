/**
 * Validates a given PIN to ensure it is either exactly 4 or 6 digits long.
 *
 * @param pin - The PIN string to be validated.
 * @returns `true` if the PIN is valid (either 4 or 6 digits), `false` otherwise.
 */
export function validatePIN(pin: string) {
  let re = /^\d{4}$|^\d{6}$/;
  return re.test(pin);
}
