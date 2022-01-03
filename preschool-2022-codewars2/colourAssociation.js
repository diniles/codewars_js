// colourAssociation.js
// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript

// Colour plays an important role in our lifes. Most of us like this colour better
// then another. User experience specialists believe that certain colours have
// certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in
// each array element. The function you will write needs to return the colour as
// 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
// Test.assertSimilar(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
// Test.assertSimilar(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);

function colourAssociation(array) {
    // We <3 colours..
    const result = [];
    for (const el of array) {
        const o = {};
        o[el[0]] = el[1];
        result.push(o);
    }
    return result;
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));
