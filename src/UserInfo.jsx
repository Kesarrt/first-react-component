// src/UserInfo.jsx

function UserInfo({ name, age }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px' }}>
      <h3 style={{ margin: 0 }}>User Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;