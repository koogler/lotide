const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('chai').assert;
const tail = require('../tail.js');


describe("#tail", () => {
  it("returns 'Lighthouse Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs'])
  });
});


// tail(words);
// assertEqual(words.length, 3); // original array should still have 3 elements!
