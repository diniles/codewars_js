// simpleMultiplication.js
// https://www.codewars.com/kata/simple-multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//     assert.strictEqual(simpleMultiplication(2),16,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(1),9,'Should return double given argument..')
//     assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
//     assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')

function simpleMultiplication(number) {
  // your code........
  return number % 2 == 0 ? number * 8 : number * 9;
}

// another solution
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));
