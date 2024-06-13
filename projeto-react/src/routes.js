import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Quiz from './PAGES/quizPage/quiz.js'
import ColorPicker from './PAGES/RGB/rgb.js'
import PrivateRoute from './PrivateRoute';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute element={HomePage} />} />
      <Route path="/PasswordReset" element={<EsqSenha />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/rgb" element={<ColorPicker />} />
    </Routes>
  );
}

export default RoutesApp;

