# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @koogler/lotide`

**Require it:**

`const _ = require('@koogler/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array.
* `tail`: Returns all of the elements of an array but the first.
* `middle`: Returns the middle element of an array, or the two middle elements if
the array has an even number of elements.
* `assertArraysEqual`: Asserts that two arrays are equal, and returns a message
on whether it was true or false.
* `assertEqual`: Asserts that any two types of data are equal, and returns a message
on whether it was true or false.
* `assertObjectsEqual`: Asserts that two objects are equal, and returns a message
on whether it was true or false.
* `countLetters`: Returns the number of letters in the given data
* `countOnly`: Returns the number of occurances of the second element contained in
the first element.
* `eqArrays`: Compares two arrays and returns either true of false, depending on if 
they are equal or not
* `eqObjects`: Compares two objects and returns either true of false, depending on if 
they are equal or not
* `findKey`: Checks to see whether the object contains the key you entered,
and returns it to you if that is true.
* `findKeyByValue` : Checks to see whether the object contains the value you entered,
and returns the key it's under if that is true.
* `letterPositions`: Returns the index in the array of the user provided character.
* `map`: Returns the results of applying a callback function on an array.
* `takeUntil`: Slices from the given array to a new array, until the callback function finds the value given to it.
* `without`: Takes the given array and returns a new array without the second given element.