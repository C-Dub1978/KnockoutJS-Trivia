// The high number will be the length of the copied array down below....
function randomNumber(max) {
  return Math.floor(Math.random() * (max - 1));
}

const arrayToSelectRandomValuesFrom = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

// Let's write a function that will return a brand new array, of length 10.
// The new array will be composed of random values picked from the above array

// The parameters passed in will eventually be our real questionsAnswers array,
// but to keep this code readable we'll use an array of numbers
function buildRandomQuestionsArray(initialArray) {
  // make a copy of the initialArray, so that we don't ever change it
  const initialArrayCopy = initialArray.slice();
  console.log("array copy at beginning: ", initialArrayCopy.toString());

  // declare a new array, which we will push random objects to from the array
  // copy. This will be the array that we return, populated with random data
  let newArray = [];

  // Now lets run a loop 10 times, so that we pull 10 random objects from our
  // array copy and push them to the new array
  for (let i = 0; i < 10; i++) {
    // generate a random number that is no larger than our array copy length
    const randomNum = randomNumber(initialArrayCopy.length);

    // now splice the array copy, passing the randomNum as the first parameter,
    // and 1 as the second parameter, because we only want to remove the 1 object
    // at that index
    const splicedObject = initialArrayCopy.splice(randomNum, 1);

    // finally, push the above variable into our new array
    newArray.push(splicedObject);
  }
  console.log("our new array: ", newArray.toString());
  console.log("array copy at end: ", initialArrayCopy.toString());
  return newArray;
}

buildRandomQuestionsArray(arrayToSelectRandomValuesFrom);
