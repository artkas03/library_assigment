const Assigment = require("../classes/Assigment");
const tests = require("../tempdata/tests");

const checkAnswers = (quiz, answers) => {
  return quiz.reduce((acc, question) => {
    if (answers[question.question] === question.rightAnswer) {
      return acc + 1;
    }
    
    return acc;
  }, 0)
}

const getDefaultAssigments = () => {
  return tests
    .filter(test => test.isAvailableFromStart)
    .map(test => new Assigment(test));
}

module.exports = {
  checkAnswers,
  getDefaultAssigments,
}