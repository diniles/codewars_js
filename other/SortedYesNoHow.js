// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// Complete the method which accepts an array of integers, and returns one
// of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending
// order
// "yes, descending" - if the numbers in the array are sorted in a descending
// order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be
// one correct answer.

function isSortedAndHow(array) {
  const arrA = array.slice().sort((a, b) => a - b);
  const arrD = array.slice().sort((a, b) => b - a);
  let result = 'no';
  if (array.join() == arrA.join()) {
    result = 'yes, ascending';
  }
  if (array.join() == arrD.join()) {
    result = 'yes, descending';
  }
  return result;
}

console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'
