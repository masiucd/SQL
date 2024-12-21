export function maskify(cc: string) {
  if (cc.length <= 4) return cc;
  let xs = cc
    .split("")
    .reduce((acc: string[]) => {
      acc.push("#");
      return acc;
    }, [])
    .join("");

  let fourLastOfCC = cc.slice(cc.length - 4, cc.length);
  let result = xs.slice(0, xs.length - 4) + fourLastOfCC;
  return result;
}
