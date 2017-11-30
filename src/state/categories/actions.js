import types from "./types";
import Client from "../../libs/Client";

export const categoriesHasError = bool => ({
  type: types.CATEGORIES_HAS_ERROR,
  hasError: bool
});

export const categoriesIsLoading = bool => ({
  type: types.CATEGORIES_IS_LOADING,
  isLoading: bool
});

export const categoriesFetchDataSuccess = categories => ({
  type: types.CATEGORIES_FETCH_DATA_SUCCESS,
  categories
});

export const categoriesFetchData = url => dispatch => {
  dispatch(categoriesIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(categoriesFetchDataSuccess(data.message));
      dispatch(categoriesIsLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(categoriesIsLoading(false));
      dispatch(categoriesHasError(true));
    });
};

export default {
  categoriesHasError,
  categoriesIsLoading,
  categoriesFetchDataSuccess,
  categoriesFetchData
};
