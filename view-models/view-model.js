function CurrentQuestionModel(question, answers, correctAnswer, id) {
  var self = this;
  self.question = question;
  self.answers = answers;
  self.correctAnswer = correctAnswer;
  self.id = id;
}

function OverviewModel() {
  var self = this;

  self.userName = ko.observable("");

  self.userNameSet = ko.observable(false);

  self.header = "Trivia Game";

  self.answeredQuestions = ko.observableArray([]);

  self.currentQuestion = null;

  self.submitted = ko.observable(false);

  self.loadQuestionIntoView = function(id) {
    const index = self.answeredQuestions().findIndex(obj => {
      return obj.id === parseInt(id);
    });
    if (index !== -1) {
      self.currentQuestion = self.answeredQuestions()[index];
    }
  };

  self.setUserName = ko.computed({
    read: function() {
      return self.userNameSet();
    },
    write: function() {
      self.userNameSet(true);
    },
    owner: self
  });

  self.toggleSubmitted = ko.computed({
    read: function() {
      return self.submitted();
    },
    write: function() {
      if (self.submitted() === true) {
        self.submitted(false);
      } else {
        self.submitted(true);
      }
    },
    owner: self
  });

  ko.components.register("questions-answers", {
    viewModel: CurrentQuestionModel,
    template: `
      <p></p>
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
