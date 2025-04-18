// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;
// Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and
// first name of a guest come in the result between parentheses separated by
// a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)
// (TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two
// people have the same first name too.

// function meeting(s) {
//   const names = s.split(';');
//   for (let i = 0; i < names.length; i++) {
//     names[i] = names[i].toUpperCase().split(':');
//     let currName = names[i];
//     [currName[0], currName[1]] = [currName[1], currName[0]];
//   }
//   // let namesString = names.sort().join(' ').replaceAll(' ', ')(');
//   let namesString = names.sort().join(')(').replaceAll(',', ', ');

//   return '(' + namesString + ')';
// }

// Best practice
function meeting(s) {
  let string = s
    .toUpperCase()
    .split(';')
    .map((x) => x.split(':').reverse().join(', '))
    .sort()
    .join(')(');
  return '(' + string + ')';
}

const s =
  'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

console.log(meeting(s));
