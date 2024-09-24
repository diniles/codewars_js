// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method
// must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xCount = [...str.toLowerCase().matchAll('x')].length;
  let oCount = [...str.toLowerCase().matchAll('o')].length;
  return xCount == oCount;
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
