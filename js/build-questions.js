/**
 * This function takes an array of questionsAnswers objects, and returns an
 * array with length of second argument. In this case it's 10 but can be
 * any number that is less than the first argument array length
 *
 * @param {[]} initialArray
 */
exports.buildQuestions = (initialArray, newArrayLength) => {
  // Make sure the new array length is less than the first argument length
  if (initialArray.length < newArrayLength) {
    newArrayLength = initialArray.length - 1;
  }

  // Make a copy of the input array so we don't mutate it
  const initialArrayCopy = initialArray.slice();
  // Initialize new array to return
  let newArray = [];

  for (let i = 0; i < newArrayLength; i++) {
    // Generate random number of LESS than the copied array length so we never
    // go out of array bounds
    const randomNum = Math.floor(Math.random() * (initialArrayCopy.length - 1));
    // Splice the array copy at the random number index, thus removing that
    // object, adding it to our new array, and lengthening the copied array by
    // 1
    const splicedObject = initialArrayCopy.splice(randomNum, 1);
    // Push the randomly pulled object to our new array
    newArray.push(splicedObject);
  }
  // Return the new array
  return newArray;
};
