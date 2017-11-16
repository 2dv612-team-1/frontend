import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import CompaniesPage from '../pages/CompaniesPage';
import RepresentativesPage from '../pages/RepresentativesPage';

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/companies" component={CompaniesPage} />
    <Route path="/representatives" component={RepresentativesPage} />
  </div>
);

export default Routes;
