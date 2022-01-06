// addTwoNumbers.js
// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over
// numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// See link for explanation!!!

function add(num1, num2) {
  num1 = ('' + num1).split('').reverse();
  num2 = ('' + num2).split('').reverse();
  let max = Math.max(num1.length, num2.length);
  let str = [];
  for (let i = 0; i < max; i++)
    str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0));
  num1 = str.reverse().join('');
  return parseInt(num1);
}

console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));