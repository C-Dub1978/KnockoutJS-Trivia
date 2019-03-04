/**
 * This is the main viewmodel for the entire application
 */
function AppViewModel() {
  var self = this;

  // Header data binding
  self.header = "Trivia App";

  // Declare the questionsAndAnswers array below as an observableArray
  self.questionsAndAnswers = ko.observableArray(questionsAndAnswers);

  self.answerPercentage = 10;

  self.correctAnswerPercentage = function(booleanValue) {
    self.answerPercentage /= booleanValue;
    console.log("current answers correct percentage: ", self.answerPercentage);
  };

  ko.components.register("question-answer-box", {
    viewModel: function(params) {
      var self = this;
      self.triviaQuestion = ko.observable(params.triviaQuestion);
      // self.triviaAnswers = ko.observableArray(params.triviaAnswersArray);
      self.triviaAnswers = params.triviaAnswersArray;

      self.correctAnswer = params.correctAnswer;

      self.id = params.id;

      self.currentAnswer = null;

      self.setCurrentAnswer = function(data) {
        self.currentAnswer = data;
        if (
          self.currentAnswer.toLowerCase() === self.correctAnswer.toLowerCase()
        ) {
          console.log("correct!!");
          // $root.correctAnswerPercentage(1);
        } else {
          console.log("incorrect!");
          // $root.correctAnswerPercentage(0);
        }
      };
    },
    template: `
      <ul class="questions-answers-ul">
        <li class="question-li">
        Question: <pre data-bind="text: triviaQuestion" /><br />
        Answers:<br />
          <ul data-bind="foreach: triviaAnswers">
            <li class="answer-li">
              <input
                type="radio"
                data-bind="attr: { name: $parent.id },
                click: $parent.setCurrentAnswer($data)"/>
              <pre class="answer-label" data-bind="text: $data" />
            </li>
          </ul>
        </li>
      </ul>
    `
  });
}

// The array of all 20 questions and answers
const questionsAndAnswers = [
  {
    question: `What are the different primitive types in javascript?`,
    answers: [
      `string, number, boolean`,
      `string, number, boolean, null`,
      `string, number, boolean, null, function, undefined, object`,
      `string, number, boolean, null, undefined`
    ],
    correctAnswer: `string, number, boolean, null, undefined`,
    id: 1
  },
  {
    question: `What is the proper way to nest an object inside an object literal?`,
    answers: [
      `var person = {
        name: ‘Jon Doe’,
        address = {
          number: 301,
          street: ‘Elm St.’
          zip: 80000
        }
      }`,
      `var person = function() {
        name: ‘Jon Doe’,
	      address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
      `var person = {
        name: ‘Jon Doe’,
        address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
      `var person = {
        var name: ‘Jon Doe’;
        var address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`
    ],
    correctAnswer: `var person = {
        name: ‘Jon Doe’,
        address: {
          number: 301,
          street: ‘Elm St.’,
          zip: 80000
        }
      }`,
    id: 2
  },
  {
    question: `Take the following array:
                const musicians = [
                  { name: 'Kurt Cobain', band: 'Nirvana' },
                  { name: 'Dave Grohl', band: 'Foo Fighters' },
                  { name: 'Bradley Nowell', band: 'Sublime' },
                  { name: 'Gwen Stefani', band: 'No Doubt' }
                ];

               In order to return the following array:
                  ["Name: Kurt Cobain Band: Nirvana",
                   "Name: Dave Grohl Band: Foo Fighters",
                   "Name: Bradley Nowell Band: Sublime",
                   "Name: Gwen Stefani Band: No Doubt"]

               Which is the correct Array prototype function name to put in the
               following function(inside the angle brackets)?

               const finalArray = musicians.<>(function(musician) {
	              return 'Name: ' + musician.name + ', Band: ' + musician.band;
              });`,
    answers: [`forEach`, `map`, `mapEach`, `entries`],
    correctAnswer: `map`,
    id: 3
  },
  {
    question: `What is the proper way to bring an external javascript file into
    a different javascript file when using the debugger in
    VSCode?`,
    answers: [
      `const externalLibrary = module.imports(‘jquery.min.js’);`,
      `const externalLibrary = module.require(‘jquery.min.js’);`,
      `const externalLibrary = import(‘jquery.min.js’);`,
      `const externalLibrary = require(‘jquery.min.js’);`
    ],
    correctAnswer: `const externalLibrary = require(‘jquery.min.js’);`,
    id: 4
  },
  {
    question: `What is the correct way to alter the text inside the following
    html element?`,
    answers: [
      `document.getElement(‘container’).innerHTML = ‘This is the new text’;`,
      `document.queryId(‘container’).innerHTML = ‘This is the new text’;`,
      `document.getElementById(‘#container’).innerHTML = ‘This is the new text’;`,
      `document.getElementById(‘container’).innerHTML = ‘This is the new text’;`
    ],
    correctAnswer: `document.getElementById(‘container’).innerHTML = ‘This is
                    the new text’;`,
    id: 5
  }
];
