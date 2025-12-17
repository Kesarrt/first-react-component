// src/UserProfile.jsx
import UserInfo from './UserInfo';

function UserProfile() {
  // These variables are the "data" we want to pass down
  const userName = "Alex Johnson";
  const userAge = 25;

  return (
    <div style={{ padding: '20px', border: '2px solid #333', maxWidth: '300px' }}>
      <h2>User Profile (Parent)</h2>
      <p>The parent component holds the data.</p>
      
      {/* Passing data down to the Child via props */}
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;