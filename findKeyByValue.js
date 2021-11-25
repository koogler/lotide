const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😱😱😱Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function (argObj, argVal) {
  //console.log(Object.keys(argObj))
  console.log("argVal", argVal)
  let objKey = Object.keys(argObj)
  for (const key of objKey) {
    if (argObj[key] === argVal) {
      return key
    }
  }
  return
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

