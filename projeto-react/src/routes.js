import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './PAGES/Tcadastro/cad.js';
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import Componentes from './PAGES/componentes.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';
import Live from './PAGES/live.js'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Vitrine  />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/teste-componente" element={<Live />} />
      <Route path="/PasswordReset" element={<RecuperaSenha/>} />
    </Routes>
  );
}

export default RoutesApp;
