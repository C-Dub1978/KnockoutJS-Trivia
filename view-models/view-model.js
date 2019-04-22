/**
 * Main View Model bound in our jquery call at the bottom of index.html
 */
function MainViewModel() {
  // Reference to 'this'
  const self = this;
  // Length 10 array of questionsAnswers objects
  self.questionsArray = ko.observableArray("");
  // Username
  self.userName = ko.observable("");
  // All answers submitted flag for rendering the results template
  self.answersSubmitted = ko.observable(false);
  // Current id in the questionsArray
  self.currentId = ko.observable(0);
  // Current template view
  self.currentTemplate = ko.observable("select-number-of-questions");
  // Progress through the trivia questions
  self.progress = ko.observable("");
  // Percentage of questions correct
  self.resultsPercent = ko.observable(0);
  // Percentage of progress for Progress bar
  self.percentage = ko.observable(0);
  // Results rank observable
  self.resultsRank = ko.observable("");
  // Number of questions observable
  self.numberOfQuestions = ko.observable("");
  // Number of questions to choose from
  self.amtQuestions = ko.observableArray([10, 15, 20]);

  // HELPER FUNCTIONS

  // Initialize function
  self.initialize = function() {
    if (typeof self.numberOfQuestions() != "number") {
    } else {
      self.questionsArray(populateQuestions(self.numberOfQuestions()));
      self.currentTemplate("landing-container");
    }
  };

  // Handler for when the user selects an answer
  self.onRadioChange = function(data, event) {
    const selectedIndex = event.target.value;
    self.questionsArray()[self.currentId()].setAnswer(selectedIndex);
  };

  // Username setter
  self.submitUsername = function() {
    let inputName = $("#userName").val();
    if (!inputName || inputName === "") {
      inputName = "Player 1";
    }
    self.userName(inputName);
    self.currentTemplate("qa-container");
    self.updatePercentage();
  };

  // Click handler for previous button
  self.navigatePrevious = function() {
    const id = parseInt(self.currentId());
    if (id > 0) {
      self.currentId(id - 1);
      self.updatePercentage();
      window.scrollTo(0, 0);
    }
  };

  // Click handler for next button
  self.navigateNext = function() {
    const id = parseInt(self.currentId());
    if (id < self.questionsArray().length - 1) {
      self.currentId(id + 1);
      self.updatePercentage();
      window.scrollTo(0, 0);
    }
  };

  // Click handler for grading submission
  self.submitAll = function() {
    window.scrollTo(0, 0);
    self.currentTemplate("results-container");
    self.answersSubmitted(true);
    self.displayScore();
  };

  // Click handler for restart button
  self.restartGame = function() {
    self.questionsArray(populateQuestions());
    self.userName("");
    self.answersSubmitted(false);
    self.currentId(0);
    self.currentTemplate("select-number-of-questions");
    self.progress("");
    self.resultsPercent("");
    self.resultsRank("");
    self.percentage(0);
    self.numberOfQuestions("");
  };

  // Updates percentage for progress bar.
  // called by submitUsername, navigatePrevious, and navigateNext
  self.updatePercentage = function() {
    const id = parseInt(self.currentId()) + 1;
    const questions = parseInt(self.numberOfQuestions());
    const newPercent = Math.floor((id / questions) * 100);
    self.percentage(newPercent + "%");
  };

  //Grading function that outputs the user rank and score percentage.
  self.displayScore = function() {
    let score = 0;
    for (let i = 0; i < self.questionsArray().length; i++) {
      if (self.questionsArray()[i].isCorrect()) {
        score++;
      }
    }
    const answerPercentage = (score / self.questionsArray().length) * 100;
    if (answerPercentage <= 60) {
      self.resultsRank("Beginner");
    } else if (answerPercentage > 60 && answerPercentage <= 80) {
      self.resultsRank("Novice");
    } else {
      self.resultsRank("Expert");
    }
    self.resultsPercent(answerPercentage);
  };
}

/**
 * Helper function, calls on the files in /js folder to get the original 20
 * question array, and build an array of random questionsAnswers objects pulled
 * from that array.
 */
function populateQuestions(numQuestions) {
  const twentyQuestionsArray = getAllQuestionsAndAnswers();
  return buildQuestions(twentyQuestionsArray, numQuestions);
}
