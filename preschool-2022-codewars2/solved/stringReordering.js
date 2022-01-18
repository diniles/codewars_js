// stringReordering.js
// https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript

// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys'
// integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The
// dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'

// function sentence(List) {
//   // your code
//   let result = '';
//   List.sort((a, b) =>
//     Object.keys(a) - Object.keys(b)
//   );
//   List.forEach(function (el) {
//     for (const elKey in el) {
//       result += el[elKey] + ' ';
//     }
//   });
//   return result.trim();
// }

// best solution
const sentence = list =>
  list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(item => Object.values(item)[0])
    .join(' ');

let List = [
  {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
];

console.log(sentence(List));