// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which
// is odd).

// function findOdd(A) {
//   const counter = (arr, val) =>
//     arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
//   for (const el of A) {
//     let c = counter(A, el);
//     if (c % 2 != 0) return el;
//   }
// }

// Best practice
function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
