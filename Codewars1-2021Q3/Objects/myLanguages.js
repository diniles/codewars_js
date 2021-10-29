// myLanguages.js
// https://www.codewars.com/kata/mylanguages
// Task
// You are given a dictionary/hash/object containing some languages and
// your test results in the given languages. Return the list of languages
//  where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

function myLanguages(results) {
  const sorted = Object.entries(results)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const langs = [];
  for (const key in sorted) {
    if (Number(sorted[key]) >= 60) {
      langs.push(key);
    }
  }
  return langs;
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));
