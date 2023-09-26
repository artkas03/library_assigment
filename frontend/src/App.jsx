import { useState } from 'react';
import './App.scss';
import { Authorization } from './pages/Authorization/Authorization';
import Tests from './pages/Tests/Tests';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <nav className="navbar navbar-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <h1 className="title">Assigment</h1>
        </a>
      </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {currentUser && (
                  <button 
                    className="button is-danger" 
                    onClick={() => setCurrentUser(null)}
                  >
                    <strong>Sign out</strong>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {currentUser ? (
        <Tests user={currentUser} />
      ) : (
        <Authorization onUserChange={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
