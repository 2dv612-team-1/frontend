import Client from "../libs/Client";
import Auth from "../libs/Auth";
import Jwt from "../libs/Jwt";

export function loginIsLoading(bool) {
  return {
    type: "LOGIN_IS_LOADING",
    isLoading: bool
  };
}

export function loginHasError(bool, error) {
  return {
    type: "LOGIN_HAS_ERROR",
    hasError: bool,
    errorMessage: error
  };
}

export function isLogedIn(bool, username, role) {
  return {
    type: "LOGEDIN_AS",
    isLoggedIn: bool,
    username,
    role
  };
}

export function performLogin(url, fields) {
  return dispatch => {
    dispatch(loginIsLoading(true));

    Client.POST(url, fields)
      .then(data => {
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
}
