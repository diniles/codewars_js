// oppositeNumber.js
// https://www.codewars.com/kata/opposite-number

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  //your code here
  return number * -1;
}

//another solution
function opposite(number) {
  return -number;
}
console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));
