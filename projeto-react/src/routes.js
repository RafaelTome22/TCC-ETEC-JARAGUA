import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'




import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import Componentes from './PAGES/componentes.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/PasswordReset" element={<EsqSenha/>} />
    </Routes>
  );
}

export default RoutesApp;

