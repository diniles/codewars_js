// movesInSquaredStrings1.js
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25
// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long:
// For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror
// abcd --> dcba     |abcd --> mnop
// efgh     hgfe     |efgh     ijkl
// ijkl     lkji     |ijkl     efgh
// mnop     ponm     |mnop     abcd

// Task:
// Write these two functions and high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s
// (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
// The form of the parameter fct in oper changes according to the language.
// You can see each form according to the language in "Sample Tests".

// Bash Note:
// The input strings are separated by \r, instead of \n. The output strings should
// be separated by \r instead of \n. See "Sample Tests".

// test
//Basic tests vertMirror
// oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"), "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
// oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"), "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");

//Basic tests horMirror
//oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
//oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");
function vertMirror(strng) {
  // Your code
  return strng
    .split("\n")
    .map((word) => word.split("").reverse().join(""))
    .join("\n");
}
function horMirror(strng) {
  // Your code
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  // Your code
  return fct(s);
}

console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"));
