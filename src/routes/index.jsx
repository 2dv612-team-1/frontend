import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CompaniesPage from "../pages/CompaniesPage";
import RepresentativesPage from "../pages/RepresentativesPage";
import LogoutPage from "../pages/LogoutPage";
import ProductsPage from "../pages/ProductsPage";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/logout" component={LogoutPage} />
    <Route path="/register/:role" component={RegisterPage} />
    <Route
      path="/adm"
      render={props => <LoginPage admin="true" {...props} />}
    />
    <AuthRoute access="admin">
      <Route path="/companies" component={CompaniesPage} />
    </AuthRoute>
    <AuthRoute access="company">
      <Route path="/representatives" component={RepresentativesPage} />
    </AuthRoute>
<<<<<<< HEAD
    <AuthRoute access="representative">
      <Route path="/products" component={ProductsPage} />
    </AuthRoute>
=======
>>>>>>> master
    <Route path="/products" component={ProductsPage} />
  </div>
);

export default Routes;
