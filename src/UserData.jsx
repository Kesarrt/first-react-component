// src/UserData.jsx
import { useState, useEffect } from 'react';

function UserData() {
  // 1. State to store the user data
  const [user, setUser] = useState(null);

  // 2. useEffect to fetch data ONLY when component loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUser(data); // Save the data to state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty array [] means "run this once on mount"

  // 3. Conditional Rendering: Show loading text if user is null
  if (!user) {
    return <h2 style={{ padding: '20px' }}>Loading...</h2>;
  }

  // 4. Display data once it exists
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '300px' }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserData;