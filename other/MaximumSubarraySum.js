// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// The maximum sum subarray problem consists in finding the maximum sum of
// a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the
// maximum sum is the sum of the whole array. If the list is made up of only
// negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty
// list or array is also a valid sublist/subarray.

const maxSequence = (arr) => {
  let res = arr[0];

  // Outer loop for starting point of subarray
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;

    // Inner loop for ending point of subarray
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j];

      // Update res if currSum is greater than res
      res = Math.max(res, currSum);
    }
  }
  return res > 0 ? res : 0;
};

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
); // 155
