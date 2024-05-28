import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';
import PrivateRoute from './PrivateRoute';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute element={HomePage} />} />
    </Routes>
  );
}

export default RoutesApp;

