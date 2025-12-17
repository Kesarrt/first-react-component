// src/Calculator.jsx
import { useState } from 'react';

function Calculator() {
  // State for the two inputs and the selected operation
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');

  // State for storing the LIST of results (History)
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = 0;
    let symbol = '';

    // Perform the math based on selection
    if (operation === 'Add') {
      res = n1 + n2;
      symbol = '+';
    } else if (operation === 'Subtract') {
      res = n1 - n2;
      symbol = '-';
    } else if (operation === 'Multiply') {
      res = n1 * n2;
      symbol = '*';
    }

    // Create a readable string like "5 + 3 = 8"
    const newResult = `${n1} ${symbol} ${n2} = ${res}`;

    // Add the new result to the existing list
    setResults([...results, newResult]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Basic Calculator</h2>
      
      {/* Inputs */}
      <input 
        type="number" 
        placeholder="First Number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      
      <input 
        type="number" 
        placeholder="Second Number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      {/* Dropdown */}
      <select 
        value={operation} 
        onChange={(e) => setOperation(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      >
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button onClick={handleCalculate} style={{ padding: '10px 20px' }}>
        Perform Action
      </button>

      {/* Display Results List */}
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h3>History:</h3>
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;