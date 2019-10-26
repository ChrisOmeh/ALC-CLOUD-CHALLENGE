import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALC 4.0 CLOUD TRACK CHALLENGE 1</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHALLENGE:&nbsp;
          <a
            className="App-status"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Completed and Accepted
          </a>
        </p>
        <a  
          className= "App-link"
          href="https://lucid.blog/prosper"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn more...
        </a>
      </header>
    </div>
  );
}

export default App;
