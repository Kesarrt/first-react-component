// src/Counter.jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs whenever 'count' changes (because of the dependency array)
  useEffect(() => {
    // Check if the number is greater than 0 AND divisible by 3
    if (count > 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // <--- This [count] is the dependency

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Alert Counter</h2>
      <h3>Current Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Counter;