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

export const categoriesPostDataSuccess = (bool, message) => ({
  type: types.CATEGORIES_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
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

export const categoriesClear = () => dispatch => {
  dispatch(categoriesHasError(false));
  dispatch(categoriesIsLoading(false));
};

export const categoriesPostData = (url, fields) => dispatch => {
  dispatch(categoriesIsLoading(true));
  console.log(url);
  Client.POST(url, fields)
    .then(data => {
      console.log(data);
      if (data.status !== 201) {
        dispatch(categoriesHasError(true, data.message));
      }
      // dispatch(categoriesIsLoading(false));
      dispatch(categoriesPostDataSuccess(true, data.message));
      // dispatch(categoriesHasError(false));
      dispatch(categoriesClear());
    })
    .catch(err => {
      dispatch(categoriesHasError(true, err.message));
    });
};

export default {
  categoriesHasError,
  categoriesIsLoading,
  categoriesFetchDataSuccess,
  categoriesPostDataSuccess,
  categoriesFetchData,
  categoriesPostData,
  categoriesClear
};
