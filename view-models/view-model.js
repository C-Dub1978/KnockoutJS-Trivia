/**
 * Main View Model bound in our jquery call at the bottom of index.html
 */
function MainViewModel() {
  // Reference to 'this'
  const self = this;
  // Length 10 array of questionsAnswers objects
  self.questionsArray = populateQuestions();
  // Username
  self.userName = ko.observable();
  // Username setter
  self.submitUsername = function() {
    let inputName = $("#userName").val();
    if (!inputName || inputName === "") {
      inputName = "Player 1";
    }
    self.userName(inputName);
  };
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
