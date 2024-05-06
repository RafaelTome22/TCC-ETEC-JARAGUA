import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './PAGES/Tlogin/log.js';
import HomePage from './PAGES/home/home.js';
import SignupPage from './PAGES/Tcadastro/cad.js';


const Routes = () => (
 <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/" component={SignupPage} />
    <Route path="/home" component={HomePage} />
</Switch>
);

export default Routes;