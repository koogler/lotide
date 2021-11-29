const eqArrays = function (one, two) {
  if (Array.isArray(one) && Array.isArray(two)) {
    if (one.length === two.length) {
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

// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["gary", "conner", "tom", "michael", "tony"]

const map = function (array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

module.exports = map

//const results1 = map(words, word => word[0]);
//console.log(results1);

//assertArraysEqual(map(words, word => word[0]), map(words2, word => word[0]))
