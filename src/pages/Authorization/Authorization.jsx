import React, { useState } from 'react'
import { authUser } from '../../api/user.js';
import { Loader } from '../../components/Loader/Loader.jsx';

export const Authorization = ({ onUserChange }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const [isAuthing, setIsAuthing] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setIsAuthing(prevState => true);
    
    authUser({ username: userName, password})
      .then((user) => {
        onUserChange(user);
        setUsername('');
        setPassword('');
      })
      .catch(() => handleError(
        'Username or password is incorrect!'
      ))
      .finally(() => setIsAuthing(prevState => false));
  }

  const handleError = (errorMessage) => {
    setErrorMessage(prevState => errorMessage);

    setTimeout(() => setErrorMessage(''), 3000);
  }

  return (
    <div className="authorization">
      <div className="container">
        {isAuthing ? (
          <Loader />
        ) : (
          <form onSubmit={handleOnSubmit}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  autoComplete="current-username"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  autoComplete="current-password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button 
                  className="button is-success"
                >
                  Login
                </button>
              </p>
            </div>

            {errorMessage && !isAuthing && (
              <div className="notification is-danger">
                <button className="delete" onClick={() => setErrorMessage('')}></button>
                {errorMessage}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
