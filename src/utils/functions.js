const checkAnswers = (quiz, answers) => {
  return quiz.reduce((acc, question) => {
    if (answers[question.question] === question.rightAnswer) {
      return acc + 1;
    }
    
    return acc;
  }, 0)
}

module.exports = {
  checkAnswers,
}