// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// Your task is to sort a given string. Each word in the string will contain
// a single number. This number is the position the word should have in the
// result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the
// input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// order(""), "", "empty input should return empty string" )

function order(words) {
  // ...
  if (words === "") return "";
  const wordsArray = words.split(" ");
  const result = [];
  result.length = wordsArray.length;

  for (const word of wordsArray) {
    for (const ch of word) {
      if (typeof parseInt(ch) == "number") {
        result[parseInt(ch) - 1] = word;
      }
    }
  }
  return result.join(" ");
}

//best solution
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
