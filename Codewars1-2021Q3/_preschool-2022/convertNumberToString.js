// convertNumberToString.js
// https://www.codewars.com/kata/convert-a-number-to-a-string

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
  return num.toString();
}

console.log(typeof numberToString(123));
console.log(typeof numberToString(999));
console.log(typeof numberToString(-1));
