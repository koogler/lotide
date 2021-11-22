const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😱😱😱Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (elem) {
  let end = [];
  for (let i = 1; i < elem.length; i++) {
    end = end + elem[i];
    end = end + ' ';
  }
  return end;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
