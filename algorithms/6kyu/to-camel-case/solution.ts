export function toCamelCase(str: string): string {
  if (str.length === 0) return "";
  let re = /[\-\s_]/gm;
  let xs = str.replace(re, " ").split(" ");
  let first = xs.shift() || "";
  let ys = xs.map((s: string) => {
    let firstLetter = s[0].toUpperCase();
    let result = firstLetter + s.slice(1);
    return result;
  });
  ys.unshift(first);
  return ys.join("");
}
