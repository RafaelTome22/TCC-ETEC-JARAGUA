import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './PAGES/Tlogin/log.js';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';

function RoutesApp(){
    return(
        <BrowserRouter>  
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<SignupPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>  
    );
};

export default RoutesApp;
