// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with
// the letter 13 letters after it in the alphabet. ROT13 is an example of
// the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with
// Rot13. If there are numbers or special characters included in the string,
// they should be returned as they are. Only letters from the latin/english
// alphabet should be shifted, like in the original Rot13 "implementation".

// My solution

// function rot13(message) {
//   const replace = (charCode, start, end) => {
//     const cipher = 12;
//     let tempCharCode = charCode + cipher;
//     let newCharCode =
//       tempCharCode < end ? tempCharCode : start + tempCharCode - end;
//     return String.fromCharCode(newCharCode);
//   };

//   const startCaps = 65;
//   const endCaps = 90;
//   const startSmall = 97;
//   const endSmall = 122;
//   let output = '';
//   for (const c in message) {
//     let charCode = message.charCodeAt(c);
//     if (
//       charCode < startCaps ||
//       charCode > endSmall ||
//       (charCode > endCaps && charCode < startSmall)
//     ) {
//       output = output.concat('', message.charAt(c));
//     } else if (charCode > startSmall) {
//       output = output.concat('', replace(charCode, startSmall, endSmall));
//     } else {
//       output = output.concat('', replace(charCode, startCaps, endCaps));
//     }
//   }
//   return output;
// }

// DeepSeek solution

function rot13(message) {
  return message.replace(/[a-z]/gi, (char) => {
    const charCode = char.charCodeAt(0);
    const offset = charCode <= 90 ? 65 : 97;
    return String.fromCharCode(((charCode - offset + 13) % 26) + offset);
  });
}

console.log(rot13('test')); // grfg
console.log(rot13('Test')); // Grfg
