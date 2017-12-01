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

export const registerPostData = (url, fields) => dispatch => {
  dispatch(registerIsLoading(true));
  console.log(url);
  Client.POST(url, fields)
    .then(data => {
      console.log(data);
      if (data.status !== 201) {
        dispatch(registerHasError(true, data.message));
      }
      dispatch(registerIsLoading(false));
      dispatch(registerPostDataSuccess(true, data.message));
      dispatch(registerHasError(false, ""));
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
