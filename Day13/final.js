/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let res = 0;
  let i = 0;
  while (i < s.length) {
    const two = symbols.indexOf(s.substring(i, i + 2));
    if (two != -1) {
      res += values[two];
      // console.log(two, symbols[two], values[two]);
      i += 2;
    } else {
      const one = symbols.indexOf(s[i]);
      res += values[one];
      // console.log(one, symbols[one], values[one]);
      i++;
    }
  }

  return res;
};
