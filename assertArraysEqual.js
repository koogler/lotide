const eqArrays = require('./eqArrays');

const assertArraysEqual = function (uno, dos) {
  if (eqArrays(uno, dos) === true) {
    console.log("👌 Wow, it's looking clean, they're the same! 👍")
  } else {
    console.log("😱 Uh, oh! Something goofed! 😥")
  }
}
module.exports = assertArraysEqual