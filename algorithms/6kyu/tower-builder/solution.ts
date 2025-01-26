export function towerBuilder(nFloors: number): string[] {
  let result = [];
  for (let i = 0; i < nFloors; i++) {
    let spaces = " ".repeat(nFloors - i - 1);
    let stars = "*".repeat(i * 2 + 1);
    result.push(spaces + stars + spaces);
  }
  return result;
}
