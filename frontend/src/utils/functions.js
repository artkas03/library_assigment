export const createAnswerSheet = (test) => {
  return test.quiz.reduce((acc, { question }) => {
    acc[question] = 0;

    return acc;
  }, {})
}