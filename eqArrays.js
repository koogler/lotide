const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😱😱😱Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (one, two) {
  console.log("one:", one, "two:", two)
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



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(2, 4);