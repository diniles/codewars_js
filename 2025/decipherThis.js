// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// You are given a secret message you need to decipher. Here are the things
// you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

// My code

// function decipherThis(str) {
//   let strArr = str.split(' ');
//   const newStrArr = strArr.map((word) => {
//     let firstCharCode = parseFloat(word);
//     let newWord = String.fromCharCode(parseInt(firstCharCode));
//     firstCharCode < 100
//       ? (newWord += word.substring(2))
//       : (newWord += word.substring(3));
//     const wordArr = newWord.split('');
//     [wordArr[1], wordArr[wordArr.length - 1]] = [
//       wordArr[wordArr.length - 1],
//       wordArr[1],
//     ];
//     word = wordArr.join('');
//     return word;
//   });

//   return newStrArr.join(' ');
// }

// Best practice

function decipherThis(str) {
  return str
    .split(' ')
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
    )
    .join(' ');
}

console.log(decipherThis('72olle 103doo 100ya'));
console.log(decipherThis('82yade 115te 103o'));
