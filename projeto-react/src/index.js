import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);
=======
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> origin/API
