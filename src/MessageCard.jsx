// src/MessageCard.jsx

// We accept "props" as an argument
function MessageCard({ title, message }) {
  // Simple card styling
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    maxWidth: '300px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#333' }}>{title}</h3>
      <p style={{ color: '#555' }}>{message}</p>
    </div>
  );
}

export default MessageCard;