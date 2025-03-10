// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// Complete the square sum function so that it squares each number passed
// into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers) {
  return numbers.reduce((acc, val) => acc + val ** 2, 0);
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
