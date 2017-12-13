import types from "./types";
import Client from "../../libs/Client";

export const companiesHasError = bool => ({
  type: types.COMPANIES_HAS_ERROR,
  hasError: bool
});

export const companiesIsLoading = bool => ({
  type: types.COMPANIES_IS_LOADING,
  isLoading: bool
});

export const companiesFetchDataSucces = companies => ({
  type: types.COMPANIES_FETCH_DATA_SUCCESS,
  companies
});

export const companiesFetchData = url => dispatch => {
  dispatch(companiesIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(companiesFetchDataSucces(data.companies));
      dispatch(companiesIsLoading(false));
    })
    .catch(() => {
      dispatch(companiesIsLoading(false));
      dispatch(companiesHasError(true));
    });
};

export const companiesClear = () => dispatch => {
  dispatch(companiesIsLoading(false));
  dispatch(companiesHasError(false));
};

export default {
  companiesHasError,
  companiesIsLoading,
  companiesFetchDataSucces,
  companiesFetchData,
  companiesClear
};
