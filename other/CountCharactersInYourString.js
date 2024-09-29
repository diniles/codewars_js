// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

// The main idea is to count all the occurring characters in a string. If you
// have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   const result = {};
//   for (const letter of string) {
//     if (!result[letter]) {
//       result[letter] = 1;
//     } else {
//       result[letter]++;
//     }
//   }
//   return result;
// }

// Best practice
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

console.log(count(''));
console.log(count('a'));
console.log(count('ab'));
console.log(count('aba'));
console.log(count('ABC'));
