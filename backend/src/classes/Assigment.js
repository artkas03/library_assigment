class Assigment {
  // #isCompleted = false;
  // #score;
  // #assignedTest;

  isCompleted = false;
  score;

  constructor(test) {
    this.assignedTest = test;
  }

  // set isCompleted(state) {
  //   this.#isCompleted = state;
  // }

  // get isCompleted() {
  //   return this.#isCompleted;
  // }

  // get assignedTest() {
  //   return this.#assignedTest;
  // }

  // get score() {
  //   return this.#score;
  // }

  // set score(newScore) {
  //   this.#score = newScore;
  // }

  // serialize() {
  //   return {
  //     isCompleted: this.#isCompleted,
  //     assignedTest: this.#assignedTest.serialize(),
  //     score: this.#score,
  //   }
  // }
}

module.exports = Assigment;