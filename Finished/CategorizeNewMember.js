// https://www.codewars.com/kata/reviews/5506c16fa11c0a0eef0000a3/groups/55fd43d97d94ac4d260000da
// my code
function openOrSenior(data) {
  // ...
  const result = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

// best code
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

console.log(
  openOrSenior([
    [75, 11],
    [90, 9],
    [90, 7],
    [21, 21],
    [60, 12],
    [1, 1],
    [90, 8],
    [54, 9],
    [55, 10],
    [0, 0],
  ])
);
