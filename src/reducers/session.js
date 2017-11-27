export function loginIsLoading(state = false, action) {
  switch (action.type) {
    case "LOGIN_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function loginHasError(state = false, action) {
  switch (action.type) {
    case "LOGIN_HAS_ERROR":
      return action.errorMessage;

    default:
      return state;
  }
}

export function isLogedIn(state = {}, action) {
  switch (action.type) {
    case "LOGEDIN_AS":
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn,
        username: action.username,
        role: action.role
      });

    default:
      return state;
  }
}
