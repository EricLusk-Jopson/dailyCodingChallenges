/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = (right - left) * Math.min(height[left], height[right]);

  while (left < right) {
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }

    if ((right - left) * Math.min(height[left], height[right]) > area) {
      area = (right - left) * Math.min(height[left], height[right]);
    }
  }

  return area;
};
