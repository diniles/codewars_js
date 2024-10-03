// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// You will be given a list of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then
// return the first value.

// The returned value must be a string, and have "***" between each of its
// letters.

// You should not remove or add elements from/to the array.

//  assert.strictEqual(
//    twoSort([
//      'bitcoin',
//      'take',
//      'over',
//      'the',
//      'world',
//      'maybe',
//      'who',
//      'knows',
//      'perhaps',
//    ]),
//    'b***i***t***c***o***i***n'
//  );
//  assert.strictEqual(
//    twoSort([
//      'turns',
//      'out',
//      'random',
//      'test',
//      'cases',
//      'are',
//      'easier',
//      'than',
//      'writing',
//      'out',
//      'basic',
//      'ones',
//    ]),
//    'a***r***e'
//  );

// function twoSort(s) {
//   s.sort();
//   let result = '';
//   for (const letter of s[0]) {
//     result += letter + '***';
//   }
//   return result.slice(0, -3);
// }

// Best practice
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

const arr1 = [
  'bitcoin',
  'take',
  'over',
  'the',
  'world',
  'maybe',
  'who',
  'knows',
  'perhaps',
];
const arr2 = [
  'turns',
  'out',
  'random',
  'test',
  'cases',
  'are',
  'easier',
  'than',
  'writing',
  'out',
  'basic',
  'ones',
];
console.log(twoSort(arr1));
console.log(twoSort(arr2));
