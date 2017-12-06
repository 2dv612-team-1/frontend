import { combineReducers } from "redux";
import types from "./types";

const ratingHasError = (state = false, action) => {
  switch (action.type) {
    case types.RATING_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const ratingFetchDataSuccess = (state = [], action) => {
  switch (action.type) {
    case types.RATING_FETCH_DATA_SUCCESS:
      return action.rating;
    default:
      return state;
  }
};

const ratingPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.RATING_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const ratingReducer = combineReducers({
  ratingHasError,
  ratingFetchDataSuccess,
  ratingPostDataSuccess
});

export default ratingReducer;

