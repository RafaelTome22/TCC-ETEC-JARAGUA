import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/authContext';

ReactDOM.render(
  <UserContextProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </UserContextProvider>,
  document.getElementById('root')
);