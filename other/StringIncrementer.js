// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

// Your job is to write a function which increments a string, to create a new
// string.

// If the string already ends with a number, the number should be incremented
// by 1.
// If the string does not end with a number. the number 1 should be appended
// to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be
// considered.

// function incrementString(strng) {
//   // const result = strng.match(/[0-9]/g);
//   // const firstNumber = strng.search(/[0-9]/g);
//   let numberPart = [];
//   const getNumberPart = (str) => {
//     let i = -1;
//     while (Math.abs(i) <= str.length) {
//       let symbol = str.at(i);

//       if (isNaN(parseInt(symbol))) {
//         break;
//       }
//       numberPart.unshift(symbol);
//       i--;
//     }
//   };

//   getNumberPart(strng);
//   console.log(numberPart);

//   const numberPartLength = numberPart.length;
//   const textPart = strng.slice(0, strng.length - numberPartLength);

//   if (numberPart.length > 0) {
//     numberPart = (parseInt(numberPart.join('')) + 1).toString();
//     const sizeDiff = strng.length - textPart.length - numberPart.length;
//     const leadZero = '0';
//     return sizeDiff > 0
//       ? `${textPart}${leadZero.repeat(sizeDiff)}${numberPart}`
//       : `${textPart}${numberPart}`;
//   } else {
//     return strng + 1;
//   }
// }

// best practice
function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

console.log(incrementString('foo'));
console.log(incrementString('foobar23'));
console.log(incrementString('foo0042'));
console.log(incrementString('foo9'));
console.log(incrementString('foo099'));
console.log(incrementString('1'));
console.log(incrementString('fo99obar99'));
