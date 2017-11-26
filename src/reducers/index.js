import { combineReducers } from "redux";
import { companies, companiesHasError, companiesIsLoading } from "./companies";
import { loginIsLoading, loginHasError, isLogedIn } from "./session";

export default combineReducers({
  companies,
  companiesHasError,
  companiesIsLoading,
  loginIsLoading,
  loginHasError,
  isLogedIn
});
