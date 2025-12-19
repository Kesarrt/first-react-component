// src/App.js
import React from 'react';
import StatusToggle from './StatusToggle'; // Q1
import ColorToggle from './ColorToggle';   // Q2 (Import this)

function App() {
  return (
    <div className="App">
      <h1>React Assignments</h1>
      
      <hr />
      <h3>Q1: Status Toggle</h3>
      <StatusToggle />

      <hr />
      <h3>Q2: Color Toggle</h3>
      <ColorToggle /> 
    </div>
  );
}

export default App;