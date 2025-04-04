// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

// Step 1: Create a function called encode() to replace all the lowercase
// vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to
// worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into
// vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the
// function will correspond to vowels.

// function encode(string) {
//   const vowels = new Map();
//   vowels.set('a', 1);
//   vowels.set('e', 2);
//   vowels.set('i', 3);
//   vowels.set('o', 4);
//   vowels.set('u', 5);
//   let result = '';

//   for (const char of string) {
//     result +=
//       vowels.has(char) && char.toUpperCase() !== char ? vowels.get(char) : char;
//   }
//   return result;
// }

// function decode(string) {
//   const vowels = new Map();
//   vowels.set('1', 'a');
//   vowels.set('2', 'e');
//   vowels.set('3', 'i');
//   vowels.set('4', 'o');
//   vowels.set('5', 'u');
//   let result = '';

//   for (const char of string) {
//     result += vowels.has(char) ? vowels.get(char) : char;
//   }
//   return result;
// }

// Best practice

function encode(string) {
  return string.replace(/[aeiou]/g, function (x) {
    return '_aeiou'.indexOf(x);
  });
}

//turn numbers back into vowels
function decode(string) {
  return string.replace(/[1-5]/g, function (x) {
    return '_aeiou'.charAt(x);
  });
}

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(decode('h2ll4'));
