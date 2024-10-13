// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build a pyramid-shaped tower, as an array/list of strings, given a positive
// integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = '*'.repeat(i * 2 + 1);
    let spaces = ' '.repeat(nFloors - i - 1);
    let el = `${spaces}${stars}${spaces}`;
    tower.push(el);
  }
  return tower;
}

console.log(towerBuilder(6));
