import React from 'react';
import RoutesApp from './routes';
import { UserContextProvider } from './context/authContext';

//npm install react-scripts
//npm install firebase
//npm install react-router-dom
// npm start - roda

function App() {
  return (
    <UserContextProvider>
      <RoutesApp />
    </UserContextProvider>
  );
}

export default App;
