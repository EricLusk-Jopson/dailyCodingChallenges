/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// look at current val for both lists and record sum
// if sum is greater than 10, record units only and set carryonver === 1
//
var addTwoNumbers = function (l1, l2) {
  if (!l1.next && !l2.next) {
    let checkSum = l1.val + l2.val;
    if (checkSum >= 10) {
      const carryOver = 1;
      checkSum -= 10;
      const unit = ListNode(carryOver, null);
      return ListNode(checkSum, unit);
    }
    return ListNode(l1.val + l2.val, null);
  }

  const unlinkedOutput = [];
  const endNode = ListNode(0, null);
  let carryOver = 0;

  let num1 = l1;
  let num2 = l2;
  while (num1?.next || num2?.next) {
    // get and add current values
    const val1 = num1?.val;
    const val2 = num2?.val;
    let result = num1?.val + num2?.val + carryOver;

    // determine if the sum exceeds the order of magnitude
    carryOver = 0;
    if (result >= 10) {
      carryOver = 1;
      result -= 10;
    }

    // push the result and set the numbers to the next in the list
    unlinkedOutput.push(result);
    num1 = num1?.next ?? endNode;
    num2 = num2?.next ?? endNode;
  }

  // handle the last numbers in the list, as they have no next
  result = num1?.val + num2?.val + carryOver;
  carryOver = 0;
  if (result >= 10) {
    carryOver = 1;
    result -= 10;
  }
  unlinkedOutput.push(result);

  if (carryOver === 1) {
    unlinkedOutput.push(carryOver);
  }

  const reversed = unlinkedOutput.reverse();
  const firstNode = ListNode(reversed[0], null);
  let nextNode = firstNode;
  let currentNode = null;
  for (let i = 1; i < reversed.length; i++) {
    currentNode = ListNode(unlinkedOutput[i], nextNode);
    nextNode = currentNode;
  }

  return currentNode;
};

function ListNode(val, next) {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
}
