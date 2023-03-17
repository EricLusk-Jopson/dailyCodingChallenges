/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // return if there is no pattern to match
  if (!p || !p.length) return !s.length;

  // confirm if the first character matches
  const match = s.length && (s[0] === p[0] || p[0] === ".");

  if (p.length > 1 && p[1] === "*") {
    // if there is a match, check the pattern against the next iteration of the string
    // also check the string against the pattern coming after the *
    return (match && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2));
  } else {
    // if no * check match on next string and pattern chars
    return match && isMatch(s.substring(1), p.substring(1));
  }
};
