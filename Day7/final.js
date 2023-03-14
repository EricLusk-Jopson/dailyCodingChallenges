/**
 * @param {number} x
 * @return {number}
 */
var reverseNumericalMethod = function (x) {
  let n = Math.abs(x);
  let digits = Math.floor(Math.log(n) / Math.log(10)) + 1;
  let i = 1;
  let output = 0;
  let sign = x < 0 ? -1 : 1;

  while (n > 0) {
    output += (n % 10) * Math.pow(10, digits - i);
    n -= n % 10;
    n /= 10;
    i++;
    if (output < -2147483648 || output > 2147483647) {
      return 0;
    }
  }
  return output * sign;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverseStringMethod = function (x) {
  let sign = x < 0 ? "-" : "";
  let s = Math.abs(x).toString();
  let output = "";
  for (let i = s.length - 1; i >= 0; i--) {
    output += s[i];
  }
  const ans = parseInt(sign + output);
  if (ans < -2147483648 || ans > 2147483647) {
    return 0;
  }
  return ans;
};
