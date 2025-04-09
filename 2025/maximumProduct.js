// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

// Task
// Given an array of integers , Find the maximum product obtained from
// multiplying 2 adjacent numbers in the array. Note that the array size is at
// least 2 and consists a mixture of positive, negative integers and also
// zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from
// multiplying 2 ∗ 3 = 6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is
// obtained from multiplying 5 ∗ 10 = 50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum
// product is obtained from multiplying −2 ∗ 7 = −14

function adjacentElementsProduct(array) {
  let maxProduct = -Infinity;
  for (let i = 1; i < array.length; i++) {
    let currProduct = array[i] * array[i - 1];
    if (currProduct > maxProduct) {
      maxProduct = currProduct;
    }
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
