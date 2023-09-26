const Question = require('../classes/Question.js');
const Test = require('../classes/Test.js');

const tests = [
  new Test(
    'Begginer',
    true,
    'Some discription - Begginer',
    [
      new Question(
        'How much 2 + 5 is?', 
        ['2' , '7', '1', '6'], 
        1,
      ),
      new Question(
        'Continue the phrase: Hello...', 
        ['Brian!' , 'Vorld!', 'Bye!', 'Wordl'], 
        3,
      ),
      new Question(
        'What is the capital of the Germany?', 
        ['Florida' , 'Tokyo', 'Berlin', 'Dnipro'], 
        2,
      ),
    ],
  ),
  new Test(
    'Middle',
    true,
    'Some discription - Middle',
    [
      new Question(
        'What is average body temperature?', 
        ['35.5' , '36.6', '37.7', '38.8'], 
        1,
      ),
      new Question(
        'What is the name of the main character of the Matrix?', 
        ['Nemo' , 'Peter', 'Neo'], 
        2,
      ),
      new Question(
        'Pick one odd number from the list:', 
        ['2' , '4', '6', '5', '8'], 
        3,
      ),
      new Question(
        'What is the biggest mammalian animal on the Earth?', 
        ['Elephant' , 'Cat', 'Monkey', 'Blue whale', 'Eagle'], 
        3,
      ),
    ]
  ),
  new Test(
    'Pro',
  ),
  new Test(
    'Vip',
  ),
];

module.exports = tests;