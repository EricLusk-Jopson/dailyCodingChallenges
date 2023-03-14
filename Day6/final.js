/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const zigzag = Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    let direction = 1;
    let base = 0;

    if (Math.floor(i / (numRows - 1)) % 2 === 0) {
      direction = 1;
      base = 0;
    } else {
      direction = -1;
      base = numRows - 1;
    }
    const destination = base + direction * (i % (numRows - 1));
    zigzag[destination] += s[i];
  }
  return zigzag.join("");
};
