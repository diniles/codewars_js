// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the
// Decipher this! kata. Here are the conditions:
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  if (text.length === 1) {
    return (text = text.charCodeAt(0));
  }
  if (!isNaN(text)) {
    return Number.toString(text);
  }
  const textArr = text.split(' ');
  const newText = textArr.map((word) => {
    const lastChar = word.slice(-1);
    const secondChar = word[1];
    word = word.charCodeAt(0) + lastChar + word.slice(2, -1) + secondChar;
    return word;
  });
  return newText.join(' ');
};

console.log(encryptThis('Hello'));
console.log(encryptThis('good'));
console.log(encryptThis('hello world'));
console.log(encryptThis('A'));
console.log(encryptThis(65));
