import types from "./types";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";

export const productsHasError = (bool, err) => ({
  type: types.PRODUCTS_HAS_ERROR,
  hasError: bool,
  errorMessage: err
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

export const productsClear = () => dispatch => {
  dispatch(productsHasError(false, ""));
  dispatch(productsIsLoading(false));
};

export const productsFetchData = url => dispatch => {
  dispatch(productsIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(productsFetchDataSuccess(data.data.products));
      dispatch(productsIsLoading(false));
    })
    .catch(err => {
      // console.log(err);
      dispatch(productsIsLoading(false));
      dispatch(productsHasError(true, err));
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
  })
    .then(data => {
      console.log(data);
      if (data.status !== 201) {
        dispatch(productsHasError(true, data.message));
        dispatch(productsIsLoading(false));
      } else {
        dispatch(productsPostDataSuccess(true, "Product was created"));
        dispatch(productsHasError(false));
        dispatch(productsIsLoading(false));
      }
    })
    .catch(e => {
      dispatch(productsHasError(true, e.message));
    });

  /*  Client.POST(url, toUpload)
    //  .then(data => {})
    .catch(() => {
      //  dispatch(productUploadHasError(true));
    }); */
};

export const productsSearch = text => ({
  type: types.SEARCH,
  text
});

export const uploadMaterial = (url, file) => async dispatch => {
  const body = new FormData();
  body.append("jwt", Auth.getToken());
  body.append("files", file);

  await fetch(url, {
    method: "POST",
    body
  }).then(() => dispatch(productsFetchData("https://nanotu.be/products")));
};

export default {
  productsHasError,
  productsIsLoading,
  uploadMaterial,
  productsFetchDataSuccess,
  productsPostDataSuccess,
  productsFetchData,
  productsSearch,
  productsClear
};
