import { combineReducers } from "redux";
// import CONSTANTS from "./constants";
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

const initState = [
  {
    _id: "dfGKJGhhgddddddddddddddd",
    category: "Demo",
    createdBy: "Demo",
    description: "Demo",
    name: "Demo",
    producer: "Demo",
    files: ["DemoFile1", "DemoFile2", "DemoFile3"]
  }
];

const products = (state = initState, action) => {
  switch (action.type) {
    case types.PRODUCTS_FETCH_DATA_SUCCESS:
      return [].concat(state, action.products);
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

const productsReducer = combineReducers({
  productsHasError,
  productsIsLoading,
  products,
  productsPostDataSuccess
});

export default productsReducer;
