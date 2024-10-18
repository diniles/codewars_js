// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// function noBoringZeros(n) {
//   if (n == 0) {
//     return n;
//   }
//   do {
//     n /= 10;
//   } while (Number.isInteger(n));
//   return n * 10;
// }

// Best practice
function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

console.log(noBoringZeros(1430));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(-105));
console.log(noBoringZeros(0));
