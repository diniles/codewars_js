// mergeTwoSortedArrays.js
// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

// Merge two sorted arrays into one
// You are given two sorted arrays that both only contain integers. Your task is
// to find a way to merge them into a single one, sorted in asc order. Complete
// the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original
// sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays
// with 0 or more Integers. If both arr1 and arr2 are empty, then just return an
// empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may
// have same integers. Remove duplicated in the returned result.

// Examples
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr3 = [1, 3, 5, 7, 9];
// arr4 = [10, 8, 6, 4, 2];
// mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr5 = [1, 3, 5, 7, 9, 11, 12];
// arr6 = [1, 2, 3, 4, 5, 10, 12];
// mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
  return Array.from(new Set((arr1.concat(arr2)).sort((a, b) => a - b)));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(mergeArrays(arr1, arr2));
const arr3 = [1, 3, 5, 7, 9];
const arr4 = [10, 8, 6, 4, 2];
console.log(mergeArrays(arr3, arr4));
const arr5 = [1, 3, 5, 7, 9, 11, 12];
const arr6 = [1, 2, 3, 4, 5, 10, 12];
console.log(mergeArrays(arr5, arr6));