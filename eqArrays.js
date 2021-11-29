const assertEqual = require('./assertEqual');

const eqArrays = function (one, two) {
  if (Array.isArray(one) && Array.isArray(two)) {
    if (one.length === two.length) {
      let check = true
      for (let i = 0; i < one.length; i++) {
        if (one[i] !== two[i]) {
          return false
        }
      }
      return true
    }
  }
  else {
    return false
  }
}

module.exports = eqArrays