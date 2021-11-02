// Isograms.js
// https://www.codewars.com/kata/isograms
// An isogram is a word that has no repeating letters, consecutive or
// non-consecutive. Implement a function that determines whether a string
// that contains only letters is an isogram. Assume the empty string is an
// isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str) {
  const letters = new Set(str.toLowerCase());
  return letters.size == str.length;
}

// best solution
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
