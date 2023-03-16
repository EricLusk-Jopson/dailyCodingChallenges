/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // doesn't work so far
  if (p[0] === "*") return false;
  let i = 0;
  let j = 0;
  let char = p[j];

  while (i < s.length && j < p.length) {
    console.log(i, j);
    console.log(s[i], p[j]);
    if (s[i] !== p[j] && p[j] !== "." && p[j + 1] !== "*") return false;

    if (p[j + 1] === "*") {
      console.log("j+1 is '*'");
      if (s[i + 1] !== s[i] && p[j] !== ".") {
        console.log("i+1 is different AND p[j] isn't '.'");
        console.log(s[i], s[i + 1]);
        j += 2;
      }
    } else j++;
    i++;
  }

  if (i < s.length) return false;
  if (p[j + 1] === "*" && p[p.length - 1] !== "*") return false;
  if (p[j + 1] !== "*" && j < p.length) return false;
  return true;

  // const regex = new RegExp(p, "g");
  // const result = s.match(regex);
  // console.log(result);
  // if(!result) {return false}
  // return result && result[0] === s;
};
