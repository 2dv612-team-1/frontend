import { combineReducers } from "redux";
import { companies, companiesHasError, companiesIsLoading } from "./companies";

export default combineReducers({
  companies,
  companiesHasError,
  companiesIsLoading
});
