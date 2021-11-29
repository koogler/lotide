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

assertArraysEqual([1, 2, 3], [1, 2, 3])


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);