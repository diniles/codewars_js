// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// An anagram is the result of rearranging the letters of a word to produce
// a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams
// of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram

const isAnagram = function (test, original) {
  return (
    test.toLowerCase().split('').sort().join() ===
    original.toLowerCase().split('').sort().join()
  );
};

console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathCubeK'));
