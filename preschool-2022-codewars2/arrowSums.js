// arrowSums.js
// https://www.codewars.com/kata/559f35bde66a7250f60000c9/train/javascript

// Sum all the values in an array using Arrow style function
// Task
// Your task is to complete the function in the string to Sum all the numbers
// in an array using the Arrow style function
// NOTE:

// Because eval hasn't caught up and cannot evaluate arrow style functions I have
// to do it manually. Your solution must contain the Arrow style function, the
// curly braces inside the reduce and the return statement because it must be
// manually converted to an old function style to test the validlity of the
// function itself. Your function will be returned to you when it is converted
// incase it fails (which is highly possible) if any issues occur please post in
// the discussion and provide your solution marked as spoiler, Thanks.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var Sum = "sum = function(arr){ return arr.reduce( (a,b)=> a+b); }";

var test = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38],
];

console.log(Sum);
console.log(Sum);
