// arrayDeepCount.js
// https://www.codewars.com/kata/array-deep-count
// Array.prototype.length will give you the number of top-level elements
// in an array.

// Your task is to create a function deepCount that returns the number of
// ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7
// The input will always be an array.

function deepCount(a) {
  let counter = 0;
  function count(a) {
    for (let i = 0; i < a.length; i++) {
      counter++;
      if (Array.isArray(a[i])) {
        count(a[i]);
      }
    }
  }
  count(a);
  return counter;
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
