import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const companiesHasError = (state = false, action) => {
  switch (action.type) {
    case types.COMPANIES_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const companiesIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.COMPANIES_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const companies = (state = [], action) => {
  switch (action.type) {
    case types.COMPANIES_FETCH_DATA_SUCCESS:
      return action.companies;

    default:
      return state;
  }
};

const companiesReducer = combineReducers({
  companiesHasError,
  companiesIsLoading,
  companies
});

export default companiesReducer;
