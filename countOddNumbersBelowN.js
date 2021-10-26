// countOddNumbersBelowN.js
// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers
// below n, EASY!

// oddCount(7); //=> 3, i.e [1, 3, 5]
// oddCount(15); //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// oddCount(15023), 7511, "Oops! Wrong.");

function oddCount(n) {
  return n % 2 != 0 ? (count = (n - 1) / 2) : (count = n / 2);
}

console.log(oddCount(7));
console.log(oddCount(15));
console.log(oddCount(15023));
console.log(oddCount(1940314687537768));
