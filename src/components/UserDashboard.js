import React from 'react';

const UserDashboard = ({ username, onLogout }) => {
  return (
    <div className="user-dashboard">
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default UserDashboard;