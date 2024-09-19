import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './context/authContext';

//npm install react-scripts
//npm install firebase
//npm install react-router-dom
// npm start - roda

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
