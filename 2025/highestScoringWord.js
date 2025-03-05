// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the
// alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the
// original string.

// All letters will be lowercase and all inputs will be valid.

// function high(x) {
//   const strArr = x.split(' ');
//   let score = 0;
//   let result = '';
//   for (const el of strArr) {
//     let curScore = 0;
//     for (let i = 0; i < el.length; i++) {
//       curScore += el.charCodeAt(i) - 96;
//     }
//     if (curScore > score) {
//       score = curScore;
//       result = el;
//     }
//   }
//   return result;
// }

// Best practice
function high(s) {
  let as = s
    .split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

console.log(high('man i need a taxi up to ubud')); //taxi
console.log(high('what time are we climbing up the volcano')); //volcano
console.log(high('take me to semynak')); //semynak
console.log(high('aa b')); //aa
console.log(high('b aa')); //b
console.log(high('bb d')); //bb
console.log(high('d bb')); //d
console.log(high('aaa b')); //aaa
