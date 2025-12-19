// src/App.js
import React from 'react';
import StatusToggle from './StatusToggle'; // Q1
import ColorToggle from './ColorToggle';   // Q2
import Assignment3 from './Assignment3';   // Q3 (Import this)

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>React Assignments</h1>
      
      {/* Q1 */}
      <details>
        <summary>Q1: Status Toggle</summary>
        <StatusToggle />
      </details>
      <hr />

      {/* Q2 */}
      <details>
        <summary>Q2: Color Toggle</summary>
        <ColorToggle />
      </details>
      <hr />

      {/* Q3 */}
      <h3>Q3: Iteration + Fetch + Cleanup</h3>
      <Assignment3 />
      <hr />

    </div>
  );
}

export default App;