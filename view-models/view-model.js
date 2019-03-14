/**
 * Main View Model bound in our jquery call at the bottom of index.html
 */
function MainViewModel() {
  // Reference to 'this'
  const self = this;
  // Length 10 array of questionsAnswers objects
  self.questionsArray = populateQuestions();
}

/**
 * Helper function, calls on the files in /js folder to get the original 20
 * question array, and build an array of random questionsAnswers objects pulled
 * from that array.
 */
function populateQuestions() {
  const twentyQuestionsArray = getAllQuestionsAndAnswers();
  return buildQuestions(twentyQuestionsArray, 10);
}
