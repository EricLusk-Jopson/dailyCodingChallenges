/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let middle =
    s.length % 2 === 1
      ? Math.floor(s.length / 2)
      : Math.floor((s.length - 1) / 2);
  let i = middle;
  let record = "";
  let iterations = 0;

  while (i >= 0 && i < s.length) {
    let right = i + 1;
    let left = i - 1;
    let currentOdd = s[i];
    let currentEven = "";
    let odd = true;
    let even = false;

    if (s[i] === s[right]) {
      currentEven = currentOdd + s[right];
      even = true;
    }

    while (left >= 0 && right <= s.length) {
      if (!odd && !even) break;

      if (odd) {
        if (s[left] === s[right]) {
          currentOdd = s[left] + currentOdd + s[right];
        } else {
          odd = false;
        }
      }

      if (even) {
        if (s[left] === s[right + 1]) {
          currentEven = s[left] + currentEven + s[right + 1];
        } else {
          even = false;
        }
      }
      left--;
      right++;
    }

    const max =
      currentOdd.length > currentEven.length ? currentOdd : currentEven;
    record = max.length > record.length ? max : record;

    i = middle + Math.pow(-1, iterations) * (Math.floor(iterations / 2) + 1);
    iterations++;
  }
  return record;
};
