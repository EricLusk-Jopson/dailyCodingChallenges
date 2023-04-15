/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let numerals = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
  ];
  let output = ["", "", "", ""];
  let i = 0;

  while (num > 0 && i < 3) {
    let units = num % 10;

    if (units < 4) {
      output[3 - i] = numerals[i][0].repeat(units);
    } else if (units === 4) {
      output[3 - i] = numerals[i][0] + numerals[i][1];
    } else if (units < 9) {
      output[3 - i] = numerals[i][1] + numerals[i][0].repeat(units - 5);
    } else {
      output[3 - i] = numerals[i][0] + numerals[i][2];
    }

    num = (num - units) / 10;
    i++;
  }

  if (num > 0) {
    output[0] = numerals[2][2].repeat(num);
  }

  return output.join("");
};
