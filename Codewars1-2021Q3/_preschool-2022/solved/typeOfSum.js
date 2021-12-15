// typeOfSum.js
// https://www.codewars.com/kata/type-of-sum

// Return the type of the sum of the two arguments
// describe("Basic tests",() => {
//   Test.assertEquals(typeOfSum(12, 1), 'number');
//   Test.assertEquals(typeOfSum('d', 1), 'string');
//   Test.assertEquals(typeOfSum(1, 'a'), 'string');
//   Test.assertEquals(typeOfSum('dd', ''), 'string');
//   Test.assertEquals(typeOfSum(true, 1), 'number');
//   Test.assertEquals(typeOfSum('s', false), 'string');
//   Test.assertEquals(typeOfSum(null, 1), 'number');
//   Test.assertEquals(typeOfSum('s', null), 'string');
//   Test.assertEquals(typeOfSum(null, undefined), 'number');
//   Test.assertEquals(typeOfSum(undefined, 're'), 'string');
//   Test.assertEquals(typeOfSum(undefined, true), 'number');
//   Test.assertEquals(typeOfSum(null, false), 'number');
// })

function typeOfSum(a, b) {
  return typeof (a + b);
}

// another solution
const typeOfSum = (a, b) => typeof (a + b);

console.log(typeOfSum(12, 1));
console.log(typeOfSum("d", 1));
console.log(typeOfSum(1, "a"));
console.log(typeOfSum("dd", ""));
console.log(typeOfSum(true, 1));
console.log(typeOfSum("s", false));
console.log(typeOfSum(null, 1));
console.log(typeOfSum("s", null));
console.log(typeOfSum(null, undefined));
console.log(typeOfSum(undefined, "re"));
console.log(typeOfSum(undefined, true));
console.log(typeOfSum(null, false));
