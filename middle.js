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

const assertArraysEqual = function (uno, dos) {
  if (eqArrays(uno, dos) === true) {
    console.log("👌 Wow, it's looking clean, they're the same! 👍")
  } else {
    console.log("😱 Uh, oh! Something goofed! 😥")
  }
}

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