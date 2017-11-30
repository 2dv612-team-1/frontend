import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const categoriesHasError = (state = false, action) => {
  switch (action.type) {
    case types.CATEGORIES_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const categoriesIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.CATEGORIES_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const categories = (state = [], action) => {
  switch (action.type) {
    case types.CATEGORIES_FETCH_DATA_SUCCESS:
      return action.categories;

    default:
      return state;
  }
};

const categoriesReducer = combineReducers({
  categoriesHasError,
  categoriesIsLoading,
  categories
});

export default categoriesReducer;
