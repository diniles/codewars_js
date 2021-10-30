// DigitsExplosion.js
// https://www.codewars.com/kata/digits-explosion
// Given a string made of digits [0-9], return a string where each digit
// is repeated a number of times equals to its value.

// Examples
// explode("312"); // => "333122"
// explode("102269"); // => "12222666666999999999"

function explode(s) {
  const elems = s.split("");
  let result = "";
  for (let i = 0; i < elems.length; i++) {
    for (let j = 0; j < parseInt(elems[i]); j++) {
      result += elems[i];
    }
  }
  return result;
}

console.log(explode("312"));
console.log(explode("102269"));
