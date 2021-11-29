const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let empty = []
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return empty
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    return Array.from(String(array[mid]), Number)
  }
  if (array.length > 2 && array.length % 2 === 0) {
    let result = []
    result.push(array[mid - 1], array[mid])
    return result
  }
}

module.exports = middle