import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Quiz from './PAGES/quizPage/quiz.js'
import ColorPicker from './PAGES/RGB/rgb.js'
import PrivateRoute from './PrivateRoute';
=======
import Visao from './PAGES/ViewApi/Visao.js'
import Auditiva from './PAGES/ViewApi/Auditiva.js'
import Motora from './PAGES/ViewApi/Motora.js'
=======

>>>>>>> API
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import Componentes from './PAGES/componentes.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';
>>>>>>> origin/API

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
<<<<<<< HEAD
      <Route path="/home" element={<PrivateRoute element={HomePage} />} />
      <Route path="/PasswordReset" element={<EsqSenha />} />
      <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
      <Route path="/rgb" element={<PrivateRoute element={ColorPicker} />} />
=======
      <Route path="/biblioteca" element={<Biblioteca />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/PasswordReset" element={<EsqSenha/>} />
>>>>>>> origin/API
    </Routes>
  );
}

export default RoutesApp;

