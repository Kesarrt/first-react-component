// src/StatusToggle.jsx
import React, { useState } from 'react';

// Component A
const ComponentA = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#d4edda', color: '#155724' }}>
      <h2>Status is TRUE</h2>
    </div>
  );
};

// Component B
const ComponentB = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24' }}>
      <h2>Status is FALSE</h2>
    </div>
  );
};

// Main Component
const StatusToggle = () => {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(!status); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button 
        onClick={handleToggle} 
        style={{ padding: '10px 20px', marginBottom: '20px' }}
      >
        Toggle Status
      </button>

      {/* Ternary Operator for Conditional Rendering */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

export default StatusToggle;