import React from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => {navigate('/login')}}>Home Page</h1>
    </div>
  );
}

export default HomePage;