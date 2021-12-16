// largestSquareInsideCircle.js
// https://www.codewars.com/kata/largest-square-inside-a-circle

// Determine the area of the largest square that can fit inside a circle with radius r.

// assert.strictEqual(areaLargestSquare(5), 50);
// assert.strictEqual(areaLargestSquare(7), 98);
// assert.strictEqual(areaLargestSquare(15), 450);

function areaLargestSquare(r) {
  return r ** 2 * 2;
}

console.log(areaLargestSquare(5));
console.log(areaLargestSquare(7));
console.log(areaLargestSquare(15));
console.log(areaLargestSquare(34));
