import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/home/home.js';
import Visao from './PAGES/ViewApi/Visao.js'
import Auditiva from './PAGES/ViewApi/Auditiva.js'
import Motora from './PAGES/ViewApi/Motora.js'
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Quiz from './PAGES/quizPage/quiz.js'
import ColorPicker from './PAGES/RGB/rgb.js'
import PrivateRoute from './PrivateRoute';
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<RecuperaSenha/>} />
      <Route path="/biblioteca" element={<Biblioteca/>} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute element={HomePage} />} />
      <Route path="/Visao" element={<Visao /> }  />
      <Route path="/Motora" element={<PrivateRoute element={Motora} />} />
      <Route path="/Auditiva" element={<PrivateRoute element={Auditiva} />} />
      <Route path="/PasswordReset" element={<EsqSenha/>} />
      <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
      <Route path="/rgb" element={<PrivateRoute element={ColorPicker} />} />
    </Routes>
  );
}

export default RoutesApp;

