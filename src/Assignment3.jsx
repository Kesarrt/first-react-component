// src/Assignment3.jsx
import React, { useState, useEffect } from 'react';

// --- Part 1: TodoCard Component ---
// Purely presentational: receives props and displays them
const TodoCard = ({ userId, title, completed }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px 0',
      backgroundColor: completed ? '#d1e7dd' : '#f8d7da', // Green if done, Red if pending
      color: '#333'
    }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Task:</strong> {title}</p>
      <p><strong>Status:</strong> {completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
};

// --- Part 2: TodoList Component ---
// Handles Fetching and Cleanup
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 1. Fetch Data on Mount
    console.log("Fetching todos...");
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        // 2. Slice first 15 and store in state
        setTodos(data.slice(0, 15));
      });

    // 3. Cleanup Function (Runs on Unmount)
    return () => {
      alert("cleanup worked"); 
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div style={{ border: '1px dashed #333', padding: '15px', marginTop: '10px' }}>
      <h3>Todo List (Top 15)</h3>
      {/* Iterate over todos */}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoCard 
            key={todo.id}
            userId={todo.userId}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// --- Part 3: Main Wrapper (Assignment3) ---
// Handles mounting and unmounting
const Assignment3 = () => {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      
      {/* Button to Unmount/Mount */}
      <button 
        onClick={() => setIsMounted(!isMounted)}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: isMounted ? 'red' : 'green', 
          color: 'white', 
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {isMounted ? "Unmount Todos" : "Mount Todos"}
      </button>

      {/* Conditional Rendering */}
      {isMounted && <TodoList />}
      
      {!isMounted && <p>Component Unmounted. Check for Alert.</p>}
    </div>
  );
};

export default Assignment3;