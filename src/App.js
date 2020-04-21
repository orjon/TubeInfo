import React from 'react';
import LineStatuses from './LineStatuses'
import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Transport for London API</h1>
      </header>
      <LineStatuses />
      <footer className='right'>
        <a href='http://www.orjon.com'>orjon.com</a>
      </footer>
    </div>
  );
}

export default App;
