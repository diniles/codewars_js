// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

// In this simple exercise, you will create a program that will take two lists
// of integers, a and b. Each list will consist of 3 positive integers above 0,
// representing the dimensions of cuboids a and b. You must find the difference
// of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume
// of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  var sumA = a.reduce((acc, val) => {
    return acc * val;
  }, 1);
  var sumB = b.reduce((acc, val) => {
    return acc * val;
  }, 1);
  return Math.abs(sumA - sumB);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
