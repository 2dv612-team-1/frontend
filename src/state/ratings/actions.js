import types from "./types";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";

export const ratingsHasError = bool => ({
  type: types.ratingS_HAS_ERROR,
  hasError: bool
});

export const ratingsIsLoading = bool => ({
  type: types.ratingS_IS_LOADING,
  isLoading: bool
});

export const ratingsFetchDataSuccess = ratings => ({
  type: types.ratingS_FETCH_DATA_SUCCESS,
  ratings
});

export const ratingsPostDataSuccess = (bool, message) => ({
  type: types.ratingS_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const ratingsFetchData = url => dispatch => {
  dispatch(ratingsIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(ratingsFetchDataSuccess(data.data.ratings));
      dispatch(ratingsIsLoading(false));
    })
    .catch(err => {
      console.log(err);
      dispatch(ratingsIsLoading(false));
      dispatch(ratingsHasError(true));
    });
};

export const uploadCreatedrating = (url, obj) => dispatch => {
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
  /*  Client.POST(url, toUpload)
    //  .then(data => {})
    .catch(() => {
      //  dispatch(ratingUploadHasError(true));
    }); */
};

export default {
  ratingsHasError,
  ratingsIsLoading,
  ratingsFetchDataSuccess,
  ratingsPostDataSuccess,
  ratingsFetchData
};
