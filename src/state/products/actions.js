import types from "./types";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";

export const productsHasError = bool => ({
  type: types.PRODUCTS_HAS_ERROR,
  hasError: bool
});

export const productsIsLoading = bool => ({
  type: types.PRODUCTS_IS_LOADING,
  isLoading: bool
});

export const productsFetchDataSuccess = products => ({
  type: types.PRODUCTS_FETCH_DATA_SUCCESS,
  products
});

export const productsPostDataSuccess = (bool, message) => ({
  type: types.PRODUCTS_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const productsFetchData = url => dispatch => {
  dispatch(productsIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(productsFetchDataSuccess(data.data.products));
      dispatch(productsIsLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(productsIsLoading(false));
      dispatch(productsHasError(true));
    });
};

export const uploadCreatedProduct = (url, obj) => async dispatch => {
  const toUpload = { ...obj, jwt: Auth.getToken() };
  const body = new FormData();

  Object.keys(toUpload).forEach(key => {
    if (Array.isArray(toUpload[key])) {
      body.append(key, toUpload[key][0]);
    } else {
      body.append(key, toUpload[key]);
    }
  });

  await fetch(url, {
    method: "POST",
    body
  }).catch(e => console.log(e));

  /*  Client.POST(url, toUpload)
    //  .then(data => {})
    .catch(() => {
      //  dispatch(productUploadHasError(true));
    }); */
};

export default {
  productsHasError,
  productsIsLoading,
  productsFetchDataSuccess,
  productsPostDataSuccess,
  productsFetchData
};
