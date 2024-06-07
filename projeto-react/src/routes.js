import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import PrivateRoute from './PrivateRoute';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute element={HomePage} />} />
      <Route path="/PasswordReset" element={<EsqSenha />} />
    </Routes>
  );
}

export default RoutesApp;

