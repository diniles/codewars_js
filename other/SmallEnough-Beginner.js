// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

// You will be given an array and a limit value. You must check that all values
// in the array are below or equal to the limit value. If they are, return true.
// Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  const isSmaller = (el) => el <= limit;
  return a.every(isSmaller);
}

// Another solution
// function smallEnough(a, limit) {
//   return Math.max(...a) <= limit;
// }

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
