/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const longestInitialSubstring = (s) => {
    if (s.length === 0) {
      return 0;
    }

    if (s.length === 1) {
      return 1;
    }
    const charMap = new Map();
    charMap.set(s[0], 0);

    for (let i = 1; i < s.length; i++) {
      if (charMap.get(s[i]) !== undefined) {
        return charMap.size;
      }
      charMap.set(s[i], i);
    }
    return charMap.size;
  };

  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }
  const substringsAtIndex = [];
  for (let i = 0; i < s.length; i++) {
    substringsAtIndex.push(longestInitialSubstring(s.substring(i)));
  }
  return Math.max(...substringsAtIndex);
};
