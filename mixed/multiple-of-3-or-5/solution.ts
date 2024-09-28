export function multiplesOf3Or5(number: number) {
  let xs = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      xs.push(i);
    }
  }
  return xs.reduce((a, b) => a + b, 0);
}
