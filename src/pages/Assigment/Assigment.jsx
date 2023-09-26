import React, { useState } from 'react'
import Question from './components/Question/Question'
import { createAnswerSheet } from '../../utils/functions.js';

export default function Assigment({ 
  test,
  sendAnswers,
}) {
  const [answers, setAnswers] = useState(createAnswerSheet(test));

  const changeAnswer = (key, newAnswer) => {
    setAnswers(prevState => {
      prevState[key] = newAnswer;

      return prevState;
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendAnswers(answers);
  }

  return (
    <div className="assigment">
      <div className="container">
        <h1 className="title">{test.title}</h1>
        <h2 className="subtitle">{test.description}</h2>

        <form 
          className="assigment__quiz"
          onSubmit={handleOnSubmit}
        >
          {test.quiz.map(question => (
            <Question 
              question={question} 
              key={question.question}
              changeAnswer={changeAnswer}
            />
          ))}

          <button 
            className="button is-info assigment__submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
