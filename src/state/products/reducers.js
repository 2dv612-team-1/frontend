import { combineReducers } from "redux";
// import CONSTANTS from "./constants";
import types from "./types";

const productsHasError = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};

const productsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const products = (state = [], action) => {
  switch (action.type) {
    case types.PRODUCTS_FETCH_DATA_SUCCESS:
      return action.products;
    default:
      return state;
  }
};

const productsPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const productsSearchText = (state = "", action) => {
  switch (action.type) {
    case types.PRODUCTS_SEARCH:
      return action.text;
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  productsHasError,
  productsIsLoading,
  products,
  productsPostDataSuccess,
  productsSearchText
});

export default productsReducer;
