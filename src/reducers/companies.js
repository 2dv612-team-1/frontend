export function companiesHasError(state = false, action) {
  switch (action.type) {
    case "COMPANIES_HAS_ERROR":
      return action.hasError;

    default:
      return state;
  }
}

export function companiesIsLoading(state = false, action) {
  switch (action.type) {
    case "COMPANIES_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function companies(state = [], action) {
  switch (action.type) {
    case "COMPANIES_FETCH_DATA_SUCCESS":
      return action.companies;

    default:
      return state;
  }
}
