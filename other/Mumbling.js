// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// This time no story, no theory. The examples below show you how to write
// function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z
// and A..Z.

// function accum(s) {
//   s = s.toLowerCase();
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     result += s[i].toUpperCase() + s[i].repeat(i) + '-';
//   }
//   return result.slice(0, -1);
// }

// Best practice ?!
function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
