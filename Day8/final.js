/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
  let output = s.trimStart().match(/^([-+]?\d+)/g);
  if (output < -2147483648) return -2147483648;
  if (output > 2147483647) {
    return 2147483647;
  }
  return output;
};
