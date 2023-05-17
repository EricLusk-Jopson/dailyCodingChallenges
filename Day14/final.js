/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //if I sort the array, then I only need to check the similarity of the first and last elements.
  strs.sort();

  const first = strs.at(0);
  const last = strs.at(-1);

  let i = 0;
  let output = "";

  while (i < first.length && i < last.length) {
    if (first[i] === last[i]) {
      output += first[i];
      i++;
    } else break;
  }
  return output;
};
