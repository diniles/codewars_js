// evenOrOdd.js
// https://www.codewars.com/kata/even-or-odd

// Create a function that takes an integer as an argument and returns "Even" for
// even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

console.log(even_or_odd(0));
console.log(even_or_odd(1));
console.log(even_or_odd(2));
