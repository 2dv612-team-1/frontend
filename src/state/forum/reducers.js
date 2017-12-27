import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const forumHasError = (state = false, action) => {
  switch (action.type) {
    case types.FORUM_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};

const forumIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.FORUM_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const forum = (state = [], action) => {
  switch (action.type) {
    case types.FORUM_FETCH_DATA_SUCCESS:
      return action.forum;

    default:
      return state;
  }
};

const forumPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.FORUM_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const forumSearchText = (state = "", action) => {
  switch (action.type) {
    case types.FORUM_SEARCH:
      return action.text;
    default:
      return state;
  }
};

const forumReducer = combineReducers({
  forumHasError,
  forumIsLoading,
  forum,
  forumPostDataSuccess,
  forumSearchText
});

export default forumReducer;
