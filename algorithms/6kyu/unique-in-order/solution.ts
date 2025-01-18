export function uniqueInOrder(
  iterable: string | (string | number)[]
): (string | number)[] {
  let result: (string | number)[] = [];
  for (let item of iterable) {
    if (result.length === 0 || result[result.length - 1] !== item) {
      result.push(item);
    }
  }

  return result;
}

export function uniqueInOrderV2(
  iterable: string | (string | number)[]
): (string | number)[] {
  return [...iterable].filter((item, index) => item !== iterable[index - 1]);
}
