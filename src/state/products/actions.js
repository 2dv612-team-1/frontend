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
    .catch((err) => {
      console.log(err);
      dispatch(productsIsLoading(false));
      dispatch(productsHasError(true));
    });
};

export const uploadCreatedProduct = (url, obj) => dispatch => {
  const toUpload = Object.assign({}, obj);
  toUpload.jwt = Auth.getToken();

  const body = new FormData();
  Object.keys(toUpload).forEach(key => {
    body.append(key, toUpload[key]);
  });

  console.info("POST", body, toUpload);
  console.info("This is expected to fail:");
  fetch(url, {
    method: "POST",
    body: body
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  /*Client.POST(url, toUpload)
    //  .then(data => {})
    .catch(() => {
      //  dispatch(productUploadHasError(true));
    });*/
};

export default {
  productsHasError,
  productsIsLoading,
  productsFetchDataSucces,
  productsFetchData
};
