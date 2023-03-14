/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedian = (nums) => {
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
};

const findMedianIndex = (nums) => {
  if (nums.length % 2 === 1) {
    return Math.floor(nums.length / 2);
  } else {
    return Math.floor((nums.length - 1) / 2);
  }
};

const findDestinationIndex = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return end + 1;
};

var findMedianSortedArrays = function (nums1, nums2) {
  // calculate medians of each list
  const median1 = findMedian(nums1);
  const median2 = findMedian(nums2);
  console.log(`medians are: ${median1}, ${median2}`);

  // if medians are equal, we reach a trivial solution
  if (median1 === median2) return median1;
  if (nums1.length === 0) return median2;
  if (nums2.length === 0) return median1;

  // Assign nums with lesser median to ListA
  console.log(
    median1 < median2 ? "A = nums1, B = nums2" : "A = nums2, B = nums 1"
  );
  const listA = median1 < median2 ? nums1 : nums2;
  const listB = median1 < median2 ? nums2 : nums1;
  const largerMedian = Math.max(median1, median2);
  const smallerMedian = Math.min(median1, median2);

  // Determine indices of median insertion into opposite array
  const insertionIdxA = findDestinationIndex(listA, largerMedian);
  const insertionIdxB = findDestinationIndex(listB, smallerMedian);
  console.log(
    `Median ${largerMedian} would be inserted into listA at index ${insertionIdxA}`
  );
  console.log(
    `Median ${smallerMedian} would be inserted into listB at index ${insertionIdxB}`
  );

  const medianIndexA = findMedianIndex(listA);
  const medianIndexB = findMedianIndex(listB);
  console.log("median Indices: ", medianIndexA, medianIndexB);

  // lowerA includes all elements of listA up to and including its median
  // middleA includes all elements of listA between its median and insertion index (both exclusive)
  // upperA includes all elements of listA including and beyond its insertion index
  const lowerA = listA.slice(0, medianIndexA);
  const middleA = listA.slice(medianIndexA, insertionIdxA);
  const upperA = listA.slice(insertionIdxA);
  console.log(`lowerA: ${lowerA}, middleA: ${middleA}, upperA: ${upperA}`);

  // lowerB includes all elements of listB up to its insertion index
  // middleB includes all elements of listB between its insertion index (inclusive) and median (exclusive)
  // upperB includes all elements of listB including and beyond its median
  const lowerB = listB.slice(0, insertionIdxB);
  const middleB = listB.slice(insertionIdxB, medianIndexB + 1);
  const upperB = listB.slice(medianIndexB + 1);
  console.log(`lowerB: ${lowerB}, middleB: ${middleB}, upperB: ${upperB}`);

  // determine the length of the unions of each segment
  let lowerUnionLength = lowerA.length + lowerB.length;
  let middleUnionLength = middleA.length + middleB.length;
  let upperUnionLength = upperA.length + upperB.length;
  console.log(
    `lowerUnionLength: ${lowerUnionLength}, middleUnionLength: ${middleUnionLength}, upperUnionLength: ${upperUnionLength}`
  );

  // lowerUnionLength must be equal to upperUnionLength, then we can discard them and focus on middleUnion
  let upperLowerDifference = upperUnionLength - lowerUnionLength;
  console.log(`upperLowerDifference ${upperLowerDifference}`);
  while (upperLowerDifference !== 0) {
    console.log("difference is not zero...");
    if (upperLowerDifference > 0) {
      console.log("transferring from upper to middle");
      // move one element from upper to middle
      if (upperA.at(0) !== undefined && upperB.at(0) !== undefined) {
        // case where both arrays exist
        if (upperA.at(0) <= upperB.at(0)) {
          console.log("transferring from upperA to middleA");
          middleA.push(upperA.shift());
        } else {
          console.log("transferring from upperB to middleB");
          middleB.push(upperB.shift());
        }
      } else if (upperA.at(0) !== undefined && upperB.at(0) === undefined) {
        // case where only upper A has elements
        console.log("transferring from upperA to middleA");
        middleA.push(upperA.shift());
      } else {
        // case where only upper B has elements
        console.log("transferring from upperB to middleB");
        middleB.push(upperB.shift());
      }

      if (upperLowerDifference % 2 === 0) {
        console.log("transferring from middle to lower");
        // move element from middle to lower
        if (middleA.at(0) !== undefined && middleB.at(0) !== undefined) {
          // case where both arrays exist
          if (middleA.at(0) <= middleB.at(0)) {
            console.log("transferring from middleA to lowerA");
            lowerA.push(middleA.shift());
          } else {
            console.log("transferring from middleB to lowerB");
            lowerB.push(middleB.shift());
          }
        } else if (middleA.at(0) !== undefined && middleB.at(0) === undefined) {
          // case where only upper A has elements
          console.log("transferring from middleA to lowerA");
          lowerA.push(middleA.shift());
        } else {
          // case where only upper B has elements
          console.log("transferring from middleB to lowerB");
          lowerB.push(middleB.shift());
        }
      }
    } else {
      console.log("transferring from lower to middle");
      // case where we transfer from lower to middle

      console.log("lowerA: ", lowerA.at(-1), ", lowerB: ", lowerB.at(-1));
      console.log(
        "lowerA Exists: ",
        lowerA.at(-1) !== undefined,
        ", lowerB Exists: ",
        lowerB.at(-1) !== undefined
      );

      // move one element from lower to middle
      if (lowerA.at(-1) !== undefined && lowerB.at(-1) !== undefined) {
        // case where both arrays exist
        if (lowerA.at(-1) >= lowerB.at(-1)) {
          console.log("transferring from lowerA to middleA");
          middleA.unshift(lowerA.pop());
        } else {
          console.log("transferring from lowerB to middleB");
          middleB.unshift(lowerB.pop());
        }
      } else if (lowerA.at(-1) !== undefined && lowerB.at(-1) === undefined) {
        // case where only upper A has elements
        console.log("transferring from lowerA to middleA");
        middleA.unshift(lowerA.pop());
      } else {
        // case where only upper B has elements
        console.log("transferring from lowerB to middleB");
        middleB.unshift(lowerB.pop());
      }

      if (upperLowerDifference % 2 === 0) {
        // move element from middle to upper
        console.log("transferring from middle to upper");
        if (middleA.at(-1) !== undefined && middleB.at(-1) !== undefined) {
          // case where both arrays exist
          if (middleA.at(-1) >= middleB.at(-1)) {
            console.log("transferring from middleA to upperA");
            upperA.unshift(middleA.pop());
          } else {
            console.log("transferring from middleB to upperB");
            upperB.push(middleB.pop());
          }
        } else if (
          middleA.at(-1) !== undefined &&
          middleB.at(-1) === undefined
        ) {
          // case where only middle A has elements
          console.log("transferring from middleA to upperA");
          upperA.push(middleA.pop());
        } else {
          // case where only middle B has elements
          console.log("transferring from middleB to upperB");
          upperB.push(middleB.pop());
        }
      }
    }

    lowerUnionLength = lowerA.length + lowerB.length;
    middleUnionLength = middleA.length + middleB.length;
    upperUnionLength = upperA.length + upperB.length;
    upperLowerDifference = upperUnionLength - lowerUnionLength;
    console.log(
      `lowerUnionLength: ${lowerUnionLength}, middleUnionLength: ${middleUnionLength}, upperUnionLength: ${upperUnionLength}, upperLowerDifference ${upperLowerDifference}`
    );
  }

  // check if upperLowerDifference is zero
  if (upperLowerDifference === 0) {
    console.log("difference IS zero!");
    // check middleUnion for values
    // if none, return the average of min upper and max lower
    // if one, return it
    // if two, return the average of them
    if (middleUnionLength === 0) {
      return (
        (Math.max(lowerA.at(-1), lowerB.at(-1)) +
          Math.min(upperA.at(0), upperB.at(0))) /
        2
      );
    } else if (middleUnionLength === 1 || middleUnionLength === 2) {
      console.log("middleUnionLength is: ", middleUnionLength);
      let sum = 0;
      middleA.forEach((num) => (sum += num));
      middleB.forEach((num) => (sum += num));
      return sum / middleUnionLength;
    } else {
      // middle to lower
      if (middleA.at(0) !== undefined && middleB.at(0) !== undefined) {
        // case where both arrays exist
        if (middleA.at(0) <= middleB.at(0)) {
          console.log("transferring from middleA to lowerA");
          lowerA.push(middleA.shift());
        } else {
          console.log("transferring from middleB to lowerB");
          lowerB.push(middleB.shift());
        }
      } else if (middleA.at(0) !== undefined && middleB.at(0) === undefined) {
        // case where only upper A has elements
        console.log("transferring from middleA to lowerA");
        lowerA.push(middleA.shift());
      } else {
        // case where only upper B has elements
        console.log("transferring from middleB to lowerB");
        lowerB.push(middleB.shift());
      }

      // move element from middle to upper
      console.log("transferring from middle to upper");
      if (middleA.at(-1) !== undefined && middleB.at(-1) !== undefined) {
        // case where both arrays exist
        if (middleA.at(-1) >= middleB.at(-1)) {
          console.log("transferring from middleA to upperA");
          upperA.unshift(middleA.pop());
        } else {
          console.log("transferring from middleB to upperB");
          upperB.push(middleB.pop());
        }
      } else if (middleA.at(-1) !== undefined && middleB.at(-1) === undefined) {
        // case where only middle A has elements
        console.log("transferring from middleA to upperA");
        upperA.push(middleA.pop());
      } else {
        // case where only middle B has elements
        console.log("transferring from middleB to upperB");
        upperB.push(middleB.pop());
      }

      return findMedianSortedArrays(middleA, middleB);
    }
  }
};
