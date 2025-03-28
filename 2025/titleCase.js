// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

// A string is considered to be in title case if each word in the string is
// either (a) capitalised (that is, only the first letter of the word is in
//   upper case) or (b) considered to be an exception and put entirely into
//   lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an
// optional list of exceptions (minor words). The list of minor words will be
// given as a string with each word separated by a space. Your function should
// ignore the case of the minor words string -- it should behave in the same
// way even if the case of the minor word string is changed.

// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must
// always be lowercase except for the first word in the string. The
// JavaScript/CoffeeScript tests will pass undefined when this argument is
// unused.

// Example
// titleCase('a clash of KINGS', 'a an the of')
// // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In')
// // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox')
// // should return: 'The Quick Brown Fox'

// My code
// function titleCase(title, minorWords) {
//   if (!title) return '';
//   const titleArr = title.split(' ');
//   if (minorWords) minorWords = minorWords.toLowerCase();

//   titleArr[0] =
//     titleArr[0][0].toUpperCase() + titleArr[0].slice(1).toLowerCase();

//   for (let i = 1; i < titleArr.length; i++) {
//     let word = titleArr[i];
//     word = word.toLowerCase();
//     if (!minorWords || !minorWords.includes(word)) {
//       word = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }
//     titleArr[i] = word;
//   }

//   return titleArr.join(' ');
// }

// DeeepSeek refactored
// Improvements Made:
// Better Empty Input Handling: Added a check for empty/null title input.

// More Efficient Minor Words Lookup:

// Convert minorWords to a Set for O(1) lookups instead of string includes (O(n))

// Process minorWords once at the start rather than checking in each iteration

// Simpler Logic Flow:

// Convert the entire title to lowercase first, then capitalize where needed

// Uses array map for more functional programming style

// Combines the first word and non-minor words logic in one condition

// Edge Case Handling:

// Handles empty strings better

// More consistent with word capitalization

// Uses charAt(0) which is safer than direct index access for empty strings

// Performance:

// Set lookup is faster than string includes

// Single pass transformation with map

// Readability:

// More concise implementation

// Clearer variable names

// Less mutation of variables
function titleCase(title, minorWords) {
  if (!title) return '';

  const minorWordsSet = minorWords
    ? new Set(minorWords.toLowerCase().split(' '))
    : new Set();

  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !minorWordsSet.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
