import { combineReducers } from "redux";
import types from "./types";

const representativesHasError = (state = false, action) => {
  switch (action.type) {
    case types.REPRESENTATIVES_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
};

const representativesIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.REPRESENTATIVES_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const representatives = (state = [], action) => {
  switch (action.type) {
    case types.REPRESENTATIVES_FETCH_DATA_SUCCESS:
      return action.representatives;

    default:
      return state;
  }
};

const representativesReducer = combineReducers({
  representativesHasError,
  representativesIsLoading,
  representatives
});

export default representativesReducer;
