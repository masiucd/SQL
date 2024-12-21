// return masked string
function maskify(cc: string) {
  if (cc.length <= 4) return cc;
  let xs = cc
    .split("")
    .reduce((acc: string[]) => {
      acc.push("#");
      return acc;
    }, [])
    .join("");

  let fourLastOfCC = cc.slice(cc.length - 4, cc.length);
  return xs.slice(0, xs.length - 4) + fourLastOfCC;
}

console.log(maskify("4556364607935616")); // '############5616'
console.log(maskify("64607935616")); // '#######5616'
console.log(maskify("1")); // '1'
