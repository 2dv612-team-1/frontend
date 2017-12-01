import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const productsHasError = (state = false, action) => {
  switch (action.type) {
    case types.PRODUCTS_HAS_ERROR:
      return action.hasError;

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

const productsReducer = combineReducers({
  productsHasError,
  productsIsLoading,
  products
});

export default productsReducer;
