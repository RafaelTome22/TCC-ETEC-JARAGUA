import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './PAGES/Tcadastro/cad.js';
import Vitrine from './PAGES/vitrine.js';
import Biblioteca from './PAGES/biblioteca.js';
import Componentes from './PAGES/componentes.js';
import RecuperaSenha from './PAGES/RecuperaSenha.js';
import TesteComponentes from './PAGES/TesteComponentes.js';
import UserSettings from './PAGES/userSettings.js';
import Live from './PAGES/live.js'
import Live2 from './PAGES/live2.js';
import Live3 from './PAGES/live3.js';
import Live4 from './PAGES/live4.js';
import Manutencao from './PAGES/manutencao.js';   


function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Manutencao  />} />
      <Route path="/biblioteca" element={<Biblioteca />} />
      <Route path="/configurações" element={<UserSettings />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/login" element={<SignupPage />} />
      <Route path="/teste-componente" element={<Live />} />
      <Route path="/teste-componente2" element={<Live2 />} />
      <Route path="/teste-componente3" element={<Live3 />} />
      <Route path="/teste-componente4" element={<Live4 />} />
      <Route path="/PasswordReset" element={<RecuperaSenha/>} />
    </Routes>
  );
}

export default RoutesApp;
