import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const categoriesHasError = (state = false, action) => {
  switch (action.type) {
    case types.CATEGORIES_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessage: action.errorMessage
      };

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

const categoriesPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.CATEGORIES_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

/*
const categoriesClear = (state = false, action) => {
  switch (action.type)
};
*/

const categoriesReducer = combineReducers({
  categoriesHasError,
  categoriesIsLoading,
  categories,
  categoriesPostDataSuccess
});

export default categoriesReducer;
