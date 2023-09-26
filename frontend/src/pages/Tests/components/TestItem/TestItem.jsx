import React from 'react';

export default function TestItem({
  score,
  isCompleted,
  test,
  onAssigmentStart,
}) {
  return (
    <div className="test">
      <div className="container">
        <div className="card test">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {test.title}
                </p>
              </div>
            </div>

            <div className="content">
              {test.description}
            </div>
          </div>

          {isCompleted ? (
            <div className="notification is-info test__result">
              <h4 className="title is-4">You scored - {score} point</h4>
            </div>
          ) : (
            <button 
              className="button is-primary"
              onClick={() => onAssigmentStart(test)}
            >
              Start the test
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
