// decimalPartOfTheNumber.js
// https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar.
// Always return a positive decimal part.

// Examples
// getDecimal(2.4)  === 0.4
// getDecimal(-0.2) === 0.2

function getDecimal(n) {
  n = String(n);
  return n.indexOf('.') != -1 ? Number('0' + n.slice(n.indexOf('.'))) : 0;
}

// best solution!!!
function getDecimal(n) {
  return Math.abs(n % 1);
}

console.log(getDecimal(4.5));
console.log(getDecimal(-1.2));
console.log(getDecimal(10));