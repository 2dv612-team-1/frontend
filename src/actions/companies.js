import Client from "../libs/Client";

export function companiesHasError(bool) {
  return {
    type: "COMPANIES_HAS_ERROR",
    hasError: bool
  };
}

export function companiesIsLoading(bool) {
  return {
    type: "COMPANIES_IS_LOADING",
    isLoading: bool
  };
}

export function companiesFetchDataSucces(companies) {
  return {
    type: "COMPANIES_FETCH_DATA_SUCCESS",
    companies
  };
}

export function companiesFetchData(url) {
  return dispatch => {
    dispatch(companiesIsLoading(true));
    Client.GET(url)
      .then(data => {
        dispatch(companiesFetchDataSucces(data.companies));
      })
      .catch(() => {
        dispatch(companiesIsLoading(false));
        dispatch(companiesHasError(true));
      });
  };
}
