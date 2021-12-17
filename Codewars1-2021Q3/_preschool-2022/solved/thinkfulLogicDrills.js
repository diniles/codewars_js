// thinkfulLogicDrills.js
// https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

// You're writing code to control your town's traffic lights. You need a function
// to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current
// state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.
//     assert.strictEqual(updateLight("green"), "yellow");
//     assert.strictEqual(updateLight("yellow"), "red");
//     assert.strictEqual(updateLight("red"), "green");

function updateLight(current) {
  //your code here!
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

// another solution
function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
