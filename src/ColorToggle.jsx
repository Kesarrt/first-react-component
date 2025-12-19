// src/ColorToggle.jsx
import React, { useState } from 'react';

const ColorToggle = () => {
  // State to track if the color is red (true) or blue (false)
  const [isRed, setIsRed] = useState(true);

  // Toggle function
  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      
      {/* The Div with Conditional Inline Styling */}
      <div 
        style={{ 
          width: '200px', 
          height: '100px', 
          margin: '0 auto', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease', // smooth transition
          // CONDITIONAL STYLE HERE:
          backgroundColor: isRed ? 'red' : 'blue' 
        }}
      >
        {isRed ? 'Background is RED' : 'Background is BLUE'}
      </div>

      <br />

      {/* Button to trigger the toggle */}
      <button 
        onClick={toggleColor}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Toggle Color
      </button>

    </div>
  );
};

export default ColorToggle;