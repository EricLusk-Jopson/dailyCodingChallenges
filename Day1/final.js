/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// [1, 2, 3, 4, 6] target 8
// check each number and calculate its compliment
// store the index in a map with the compliment as the index

const twoSum = (nums, target) => {
  if (nums.length === 2) {
    return [0, 1];
  }
  let indices = [];
  const compliments = new Map();
  nums.forEach((num, idx) => {
    if (compliments.get(num) !== undefined) {
      indices = [compliments.get(num), idx];
    } else {
      compliments.set(target - num, idx);
    }
  });
  return indices;
};
