/**
 * Finds the first duplicate number in an array of numbers.
 *
 * @param {number[]} xs - The array of numbers to search for duplicates.
 * @returns {number} - The first duplicate number found in the array. If no duplicate is found, returns -Infinity.
 */
export function findDup(xs: number[]) {
  let store = new Map();
  let duplicate = -Infinity;
  for (let x of xs) {
    if (!store.has(x)) {
      store.set(x, true);
    } else {
      duplicate = x;
    }
  }
  return duplicate;
}

export function findDupV2(xs: number[]) {
  let ys = xs.toSorted();
  for (let i = 0; i < ys.length; i++) {
    if (ys[i] === ys[i + 1]) {
      return ys[i];
    }
  }
  return -Infinity;
}
