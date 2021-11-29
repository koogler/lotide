const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle.js')

middle([1, 5, 2])
console.log(middle([1, 5, 2]))
console.log(middle([1, 5, 2, 6]))
assertArraysEqual(middle([1, 5, 2, 6, 3]), middle([7, 1, 2, 4, 7]))
console.log(middle([1, 5, 2, 6, 3]))
console.log(middle([7, 1, 2, 4, 7]))