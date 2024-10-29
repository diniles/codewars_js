// //www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  return n > 1 ? factorial(n - 1) * n : 1;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(7));
console.log(factorial(18));
