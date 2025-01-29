export function makeParts(arr: number[], chunkSize: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let xs = arr.slice(i, i + chunkSize);
    result.push(xs);
  }
  return result;
}

export function makePartsV2(arr: number[], chunkSize: number) {
  return arr.reduce((acc: number[][], cur: number, i: number) => {
    if (i % chunkSize === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, []);
}
