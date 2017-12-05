import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const ratingsHasError = (state = false, action) => {
  switch (action.type) {
    case types.RATINGS_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const ratingsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.RATINGS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const ratings = (state = [], action) => {
  switch (action.type) {
    case types.RATINGS_FETCH_DATA_SUCCESS:
      return action.ratings;
    default:
      return state;
  }
};

const ratingsPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.RATINGS_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const ratingsReducer = combineReducers({
  ratingsHasError,
  ratingsIsLoading,
  ratings,
  ratingsPostDataSuccess
});

export default productsReducer;
