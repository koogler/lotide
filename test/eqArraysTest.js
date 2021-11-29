const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([5, 23, 36], [5, 23, 36]), true);