import React from 'react';
import { useAuth } from '../../AuthContext';

function HomePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <p>Opaaa</p>
    </div>
  );
}

export default HomePage;