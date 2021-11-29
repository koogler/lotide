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

const without = function (source, itemsToRemove) {
  let match = []
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      match.push(source[i])
    }
  } return match
}
module.exports = without

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// //assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);