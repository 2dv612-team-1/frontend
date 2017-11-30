import types from "./types";
import Client from "../../libs/Client";

export const productsHasError = bool => ({
  type: types.PRODUCTS_HAS_ERROR,
  hasError: bool
});

export const productsIsLoading = bool => ({
  type: types.PRODUCTS_IS_LOADING,
  isLoading: bool
});

export const productsFetchDataSucces = products => ({
  type: types.PRODUCTS_FETCH_DATA_SUCCESS,
  products
});

export const productsFetchData = url => dispatch => {
  dispatch(productsIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(productsFetchDataSucces(data.products));
      dispatch(productsIsLoading(false));
    })
    .catch(() => {
      dispatch(productsIsLoading(false));
      dispatch(productsHasError(true));
    });
};

export const createData = (url, obj) => dispatch => {
  Client.POST(url, obj)
    .then(data => {
    })
    .catch(() => {
      //dispatch(productUploadHasError(true));
    });
};

export default {
  productsHasError,
  productsIsLoading,
  productsFetchDataSucces,
  productsFetchData
};
