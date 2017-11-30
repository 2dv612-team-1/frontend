import Client from "../../libs/Client";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import types from "./types";

export const registerIsLoading = bool => ({
  type: types.REGISTER_IS_LOADING,
  isLoading: bool
});

export const registerHasError = (bool, error) => ({
  type: types.REGISTER_HAS_ERROR,
  hasError: bool,
  errorMessage: error
});

export const registerPostDataSuccess = (bool, message) => ({
  type: types.REGISTER_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const registerPostData = (url, fields) => dispatch => {
  Client.POST(url, fields)
    .then(data => {
      if (data.status !== 200) {
        dispatch(registerHasError(true, data.message));
      }
      dispatch(registerIsLoading(false));
      dispatch(registerPostDataSuccess(true, data.message));
    })
    .catch(err => {
      dispatch(registerHasError(true, err.message));
    });
};

export default {
  registerIsLoading,
  registerHasError,
  registerPostDataSuccess,
  registerPostData
};
