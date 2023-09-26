const { v4: uuid } = require('uuid');

class Test {
  id = uuid();
  // #title;
  // #description;
  // #quiz;
  // #isAvailableFromStart;

  constructor(title, isAvailableFromStart = false, description = '', quiz = []) {
    this.title = title;
    this.description = description;
    this.quiz = quiz;
    this.isAvailableFromStart = isAvailableFromStart;
  }

  // get id() {
  //   return this.#id;
  // }

  // get title() {
  //   return this.#title;
  // }

  // set title(newTitle) {
  //   this.#title = newTitle;
  // }

  // get description() {
  //   return this.#description;
  // }

  // set description(newDescription) {
  //   this.#description = newDescription;
  // }

  // get quiz() {
  //   return this.#quiz;
  // }

  // get isAvailableFromStart() {
  //   return this.#isAvailableFromStart;
  // }

  // set isAvailableFromStart(state) {
  //   this.#isAvailableFromStart = state;
  // }

  // serialize() {
  //   return {
  //     id: this.#id,
  //     title: this.#title,
  //     description: this.#description,
  //     quiz: this.#quiz.map(question => question.serialize()),
  //     isAvailableFromStart: this.#isAvailableFromStart,
  //   }
  // }
}

module.exports = Test;