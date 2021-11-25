const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😱😱😱Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //console.log(Object.keys(object1))
  //console.log(Object.keys(object2))
  //console.log(Object.values(object1))
  // console.log(Object.values(object2))
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false)

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
*/