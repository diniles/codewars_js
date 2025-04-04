// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// Given an array (arr) as an argument complete the function countSmileys that
// should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as :
// or ;
// A smiley face can have a nose but it does not have to. Valid characters for
// a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with
// either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// function countSmileys(arr) {
//   let counter = 0;
//   if (arr.length === 0) {
//     return counter;
//   }
//   const checkString = /^[:;][-~]?[)D]$/;

//   for (const el of arr) {
//     if (el.match(checkString)) counter++;
//   }
//   return counter;
// }

// Best practice
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([]));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
