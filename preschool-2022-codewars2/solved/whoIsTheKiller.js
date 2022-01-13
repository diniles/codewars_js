// whoIsTheKiller.js
// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know
// every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they
// have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only
// person that saw both 'Lucas' and 'Bill'

// function killer(suspectInfo, dead) {
//   //your code here...
//   let count = 0;
//   for (const [key, value] of Object.entries(suspectInfo)) {
//     for (const el of dead) {
//       if (value.includes(el)) count++;
//     }
//     if (count == dead.length) return key;
//   }
// }

// best solution
function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)));
}

const s = {
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
};


const d = ['Lucas', 'Bill'];
console.log(killer(s, d));