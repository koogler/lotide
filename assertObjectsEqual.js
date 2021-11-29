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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  const objOneKeys = Object.keys(object1)
  for (const keys of objOneKeys) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false
      }
    } else if (object1[keys] !== object2[keys]) {
      return false
    }
  }
  return true
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😁😁😁Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`😱😱😱Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// assertObjectsEqual(cd, dc)

module.exports = assertObjectsEqual;