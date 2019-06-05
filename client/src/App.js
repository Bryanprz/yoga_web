import React from 'react';
import logo from './logo.svg';
import './App.css';
import KlassesListContainer from './components/KlassesListContainer';
import { ExchangeRates } from './components/ExchangeRates';

function App() {
  return (
    <div className="App">
      <ExchangeRates />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <KlassesListContainer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
