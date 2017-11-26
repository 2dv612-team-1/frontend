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
      return action.isLoading;

    default:
      return state;
  }
}

export function isLogedIn(state = {}, action) {
  switch (action.type) {
    case "IS_LOGEDIN":
      return Object.assign({}, state, {
        isLogedIn: action.isLogedIn,
        username: action.username,
        role: action.role
      });

    default:
      return state;
  }
}
