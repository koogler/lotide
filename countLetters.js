const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😱😱😱Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sent) {
  let counted = {}
  for (const letter of sent) {
    if (counted[letter]) {
      counted[letter]++
    } else {
      counted[letter] = 1
    }
  }
  return counted
}

