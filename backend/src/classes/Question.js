class Question {
  // #question;
  // #options;
  // #rightAnswer;

  constructor(question, options, rightAnswer) {
    this.question = question;
    this.options = options;
    this.rightAnswer = rightAnswer;
  }

  // get question() {
  //   return this.#question;
  // }

  // set question(newQuestion) {
  //   this.#question = newQuestion;
  // }

  // get options() {
  //   return this.#options;
  // }

  // set options(newOptions) {
  //   this.#options = newOptions;
  // }

  // get rightAnswer() {
  //   return this.#rightAnswer;
  // }

  // set rightAnswer(newRightAnswer) {
  //   this.#rightAnswer = newRightAnswer;
  // }

  // serialize() {
  //   return {
  //     question: this.#question,
  //     options: this.#options,
  //     rightAnswer: this.#rightAnswer,
  //   }
  // }
}

module.exports = Question;