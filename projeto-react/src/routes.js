import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Visao from './PAGES/ViewApi/Visao.js'
import Auditiva from './PAGES/ViewApi/Auditiva.js'
import Motora from './PAGES/ViewApi/Motora.js'
import SignupPage from './PAGES/Tcadastro/cad.js';
import EsqSenha from './PAGES/PasswordReset/EsqSenha.js'
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Vitrine/>} />
      <Route path="/biblioteca" element={<Biblioteca/>} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/Visao" element={<Visao /> }  />
      <Route path="/Motora" element={<Motora />} />
      <Route path="/Auditiva" element={<Auditiva />} />
      <Route path="/PasswordReset" element={<EsqSenha/>} />
    </Routes>
  );
}

export default RoutesApp;

