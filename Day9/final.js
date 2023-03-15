/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Math method
  // let forwards = x;
  // let backwards = 0;
  // while (forwards > 0) {
  //     backwards = backwards * 10 + forwards % 10;
  //     forwards -= forwards % 10;
  //     forwards /= 10;
  //     console.log(forwards, backwards);
  // }
  // return (backwards === x);

  // String method
  // if(x < 0 || (x > 0 && x % 10 === 0)) return false;
  // const str = String(x);

  // for(i = 0; i <= Math.floor((str.length - 1)/2); i++) {
  //     if(str[i] !== str[str.length - i - 1]) {return false}
  // }
  // return true

  // Array method
  const forward = String(x).split("");
  const backward = String(x).split("").reverse();
  for (let i = 0; i < forward.length; i++) {
    if (forward[i] !== backward[i]) return false;
  }
  return true;
};
