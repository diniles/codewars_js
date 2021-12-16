// removeFirstAndLast.js
// https://www.codewars.com/kata/remove-first-and-last-character

// It's pretty straightforward. Your goal is to create a function that removes
// the first and last characters of a string. You're given one parameter, the
// original string. You don't have to worry with strings with less than two characters.

// assert.strictEqual(removeChar("eloquent"), "loquen");
// assert.strictEqual(removeChar("country"), "ountr");
// assert.strictEqual(removeChar("person"), "erso");
// assert.strictEqual(removeChar("place"), "lac");
// assert.strictEqual(removeChar("ooopsss"), "oopss");

function removeChar(str) {
  //You got this!
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ooopsss"));
