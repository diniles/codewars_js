// urbanDictionary.js
// https://www.codewars.com/kata/urban-dictionary
// Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string
// containing lowercase letters "a-z" or "." where "." can represent any letter
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true
// Note: the data structure will be initialized multiple times during the tests!
var WordDictionary = function () {};

WordDictionary.prototype.addWord = function (word) {
  //code me
};

WordDictionary.prototype.search = function (word) {
  //code me
};

describe("Initial tests", () => {
  var wd = new WordDictionary();
  wd.addWord("a");
  wd.addWord("at");
  wd.addWord("ate");
  wd.addWord("ear");
  Test.assertEquals(wd.search("a"), true);
  Test.assertEquals(wd.search("a."), true);
  Test.assertEquals(wd.search("a.e"), true);
  Test.assertEquals(wd.search("b"), false);
  Test.assertEquals(wd.search("e."), false);
  Test.assertEquals(wd.search("ea."), true);
  Test.assertEquals(wd.search("ea.."), false);
  wd.addWord("co");
  wd.addWord("cod");
  wd.addWord("code");
  wd.addWord("codewars");
  Test.assertEquals(wd.search("........"), true);
  Test.assertEquals(wd.search("c.o"), false);
  Test.assertEquals(wd.search("cod."), true);
  Test.assertEquals(wd.search("c.o"), false);
  Test.assertEquals(wd.search("co..w..s"), true);
  Test.assertEquals(wd.search("co..w.."), false);
});
