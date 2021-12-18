// thirdAngleOfTriangle.js
// https://www.codewars.com/kata/third-angle-of-a-triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle
//     assert.strictEqual(otherAngle(30, 60), 90);
//     assert.strictEqual(otherAngle(60, 60), 60);
//     assert.strictEqual(otherAngle(43, 78), 59);
//     assert.strictEqual(otherAngle(10, 20), 150);

function otherAngle(a, b) {
  return 180 - a - b;
}

console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log(otherAngle(10, 20));
