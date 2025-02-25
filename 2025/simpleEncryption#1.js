// https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript

// Implement a pseudo-encryption algorithm which given a string S and an integer
// N concatenates all the odd-indexed characters of S with all the even-indexed
// characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption
// function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the
// first argument without changes.

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  for (let i = 0; i < n; i++) {
    let odds = text
      .split('')
      .filter((_, idx) => idx % 2 !== 0)
      .join('');
    let evens = text
      .split('')
      .filter((_, idx) => idx % 2 === 0)
      .join('');
    text = odds + evens;
  }

  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  let length = encryptedText.length;
  for (let i = 0; i < n; i++) {
    let mid = Math.floor(length / 2);
    let odds = encryptedText.slice(0, mid);
    let evens = encryptedText.slice(mid);

    let decryptedText = [];
    let o = 0,
      e = 0;

    for (let j = 0; j < length; j++) {
      if (j % 2 === 0) {
        decryptedText.push(evens[e++]);
      } else {
        decryptedText.push(odds[o++]);
      }
    }

    encryptedText = decryptedText.join('');
  }

  return encryptedText;
}

console.log(encrypt('012345', 3));
