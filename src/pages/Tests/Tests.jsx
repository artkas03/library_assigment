import React, { useEffect, useState } from 'react'
import TestItem from './components/TestItem/TestItem';
import { getAssigmentsByUserId, sendAssigmentAnswer } from '../../api/assigments';
import Assigment from '../Assigment/Assigment';

export default function Tests({ user }) {
  const [assigments, setAssigments] = useState([]);
  const [currentAssigment, setCurrentAssigment] = useState(null);

  const loadAssigments = () => {
    getAssigmentsByUserId(user.id)
      .then(setAssigments)
      .catch(console.log);
  }

  useEffect(() => {
    loadAssigments();
  }, [user]);

  const sendAssigmentAnswers = (answers) => {
    sendAssigmentAnswer(user.id, currentAssigment.id, answers)
      .then(() => loadAssigments());

    setCurrentAssigment(null);
  }

  return (
    <div>
      {currentAssigment ? (
        <Assigment 
          test={currentAssigment}
          sendAnswers={sendAssigmentAnswers}
        />
      ) : (
        <div className="testlist">
          {assigments.length && (
            <>
              {assigments.map(({ assignedTest, score, isCompleted }) => (
                <TestItem
                  isCompleted={isCompleted}
                  score={score}
                  key={assignedTest.id} 
                  test={assignedTest}
                  onAssigmentStart={setCurrentAssigment}
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}
