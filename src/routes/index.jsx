import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </div>
);

export default Routes;
