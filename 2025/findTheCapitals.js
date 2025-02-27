// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Write a function that takes a single non-empty string of only lowercase and
// uppercase ascii letters (word) as its argument, and returns an ordered list
// containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) result.push(i);
  }
  return result;
};

console.log(capitals('CodEWaRs'));
