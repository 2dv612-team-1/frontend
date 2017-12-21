import {combineReducers} from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const threadIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.THREAD_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const threadHasError = (state = false, action) => {
  switch (action.type) {
    case types.THREAD_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};

const thread = (state = [], action) => {
  switch (action.type) {
    case types.THREAD_FETCH_DATA_SUCCESS:
      return action.thread;

    default:
      return state;
  }
};

const threadReducer = combineReducers({threadIsLoading, threadHasError, thread});

export default threadReducer;
