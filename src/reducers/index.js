import { combineReducers } from "redux";
import { companies, companiesHasError, companiesIsLoading } from "./companies";
import { loginIsLoading, loginHasError, logedInAs } from "./session";

export default combineReducers({
  companies,
  companiesHasError,
  companiesIsLoading,
  loginIsLoading,
  loginHasError,
  logedInAs
});
