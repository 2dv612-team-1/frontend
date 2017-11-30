import { combineReducers } from "redux";
//  import CONSTANTS from "./constants";
import types from "./types";

const registerIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const registerHasError = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};

const registerPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const registerReducer = combineReducers({
  registerIsLoading,
  registerHasError,
  registerPostDataSuccess
});

export default registerReducer;
