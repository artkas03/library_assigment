import React, { useState } from 'react'

export default function Question({ 
  question,
  changeAnswer,
}) {
  const [currentAnswer, setCurrentAnswer] = useState(0);

  const onChange = (key, newAnswer) => {
    setCurrentAnswer(newAnswer);
    changeAnswer(key, newAnswer);
  }

  return (
    <div className="question">
      <div className="container">
        <div className="control question__content">
          <h4 className="subtitle is-4">{question.question}</h4>

          <div className="question__block">
            {question.options.map((option, index) => (
              <label 
                className="radio" 
                key={option}
              >
                <input 
                  className='question__block-item'
                  type="radio" 
                  name={question.question}
                  value={index}
                  checked={currentAnswer === index}
                  onChange={() => onChange(question.question, index)}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
