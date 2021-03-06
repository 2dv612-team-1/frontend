import Client from "../../libs/Client";
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

export const clearForm = () => dispatch => {
  dispatch(registerHasError(false, ""));
  dispatch(registerIsLoading(false));
  dispatch(registerPostDataSuccess(false, ""));
};

export const registerPostData = (url, fields) => dispatch => {
  dispatch(registerIsLoading(true));
  Client.POST(url, fields)
    .then(data => {
      if (data.status !== 201) {
        dispatch(registerHasError(true, data.message));
      } else {
        dispatch(registerPostDataSuccess(true, data.message));
        dispatch(registerHasError(false, ""));
      }
      dispatch(registerIsLoading(false));
    })
    .catch(err => {
      dispatch(registerHasError(true, err.message));
    });
};

export default {
  registerIsLoading,
  registerHasError,
  registerPostDataSuccess,
  registerPostData,
  clearForm
};
