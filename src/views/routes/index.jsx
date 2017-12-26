import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CompaniesPage from "../pages/CompaniesPage";
import RepresentativesPage from "../pages/RepresentativesPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CreateProductsPage from "../pages/CreateProductPage";
import LogoutPage from "../pages/LogoutPage";
import CategoriesPage from "../pages/CategoriesPage";
import CreateCategoryPage from "../pages/CreateCategoryPage";
import ForumPage from "../pages/ForumPage";
import CreateThreadPage from "../pages/CreateThreadPage";
import ThreadPage from "../pages/ThreadPage";
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
      <AuthRoute access="admin" path="/companies" component={CompaniesPage} />
      <AuthRoute
        access="admin"
        exact
        path="/categories"
        component={CategoriesPage}
      />
      <AuthRoute
        access="admin"
        path="/categories/new"
        component={CreateCategoryPage}
      />
      <AuthRoute
        access="company"
        path="/representatives"
        component={RepresentativesPage}
      />
      <AuthRoute
        access="representative"
        exact
        path="/products"
        component={ProductsPage}
      />
      <AuthRoute
        access="representative"
        path="/products/create"
        component={CreateProductsPage}
      />
      <AuthRoute
        access="representative"
        path="/product/:id"
        component={ProductPage}
      />
      <AuthRoute access="representative" path="/forum" component={ForumPage} />
      <AuthRoute
        access="representative"
        path="/threads/:id"
        component={ThreadPage}
      />
      <AuthRoute access="consumer" path="/products" component={ProductsPage} />
      <AuthRoute
        access="consumer"
        path="/product/:id"
        component={ProductPage}
      />
      <AuthRoute access="consumer" path="/forum" component={ForumPage} />
      <AuthRoute
        access="consumer"
        exact
        path="/thread/new"
        component={CreateThreadPage}
      />
      <AuthRoute
        access="consumer"
        exact
        path="/threads/:id"
        component={ThreadPage}
      />
    </Switch>
  </div>
);

export default Routes;
