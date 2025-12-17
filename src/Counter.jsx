// src/Counter.jsx
import { useState } from 'react';

function Counter() {
  // 1. Define the state variable "count" starting at 0
  const [count, setCount] = useState(0);

  // 2. Define the function to increase the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 3. Display the current number */}
      <h3>Current Count: {count}</h3>

      {/* 4. Button calls the increment function on click */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;