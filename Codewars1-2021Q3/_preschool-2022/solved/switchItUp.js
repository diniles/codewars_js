// switchItUp.js
// https://www.codewars.com/kata/switch-it-up

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");

function switchItUp(number) {
  //Write your own Code!
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
  }
}

// another solution
switchItUp = (n) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];

console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));
