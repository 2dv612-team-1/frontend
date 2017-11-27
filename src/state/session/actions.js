import Client from "../../libs/Client";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import types from "./types";

export const loginIsLoading = bool => ({
  type: types.LOGIN_IS_LOADING,
  isLoading: bool
});

export const loginHasError = (bool, error) => ({
  type: types.LOGIN_HAS_ERROR,
  hasError: bool,
  errorMessage: error
});

export const isLogedIn = (bool, username = "", role = "") => ({
  type: types.LOGEDIN_AS,
  isLoggedIn: bool,
  username,
  role
});

export const performLogin = (url, fields) => dispatch => {
  dispatch(loginIsLoading(true));

  Client.POST(url, fields)
    .then(data => {
      if (data.status !== 200) {
        dispatch(loginHasError(true, data.message));
      }
      Auth.authenticateUser(data.token);
      dispatch(loginIsLoading(false));

      const username = Jwt.getUsername(data.token);
      const role = Jwt.getRole(data.token);

      dispatch(isLogedIn(true, username, role));
    })
    .catch(err => {
      dispatch(loginHasError(true, err.message));
    });
};

export const performLogout = () => dispatch => {
  Auth.removeRole();
  Auth.deauthenticateUser();
  dispatch(isLogedIn(false));
};

export default {
  loginIsLoading,
  loginHasError,
  isLogedIn,
  performLogin,
  performLogout
};
