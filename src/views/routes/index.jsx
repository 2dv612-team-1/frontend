import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CompaniesPage from "../pages/CompaniesPage";
import RepresentativesPage from "../pages/RepresentativesPage";
import LogoutPage from "../pages/LogoutPage";
import CategoriesPage from "../pages/CategoriesPage";
import CreateCategoryPage from "../pages/CreateCategoryPage";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/register/:role" component={RegisterPage} />
      <Route
        path="/adm"
        render={props => <LoginPage admin="true" {...props} />}
      />
    </Switch>
    <Switch>
      <AuthRoute access="admin">
        <Route path="/companies" component={CompaniesPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/categories/new" component={CreateCategoryPage} />
      </AuthRoute>
    </Switch>
    <Switch>
      <AuthRoute access="company">
        <Route path="/representatives" component={RepresentativesPage} />
      </AuthRoute>
    </Switch>
  </div>
);

export default Routes;
