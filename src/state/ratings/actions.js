import types from "./types";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";

export const ratingHasError = rating => ({
  type: types.RATING_HAS_ERROR,
  hasError: bool
});

export const ratingFetchDataSuccess = rating => ({
  type: types.RATING_FETCH_DATA_SUCCESS,
  rating
});

export const ratingPostDataSuccess = (bool, message) => ({
  type: types.RATING_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const ratingPostRate = (url, rating) => dispatch => {
  const obj = {
    jwt: Auth.getToken(),
    rate: rating
  };
  Client.POST(url, obj).then(data => {
    dispatch(ratingFetchDataSuccess(data.data.rating));
  });
};

export default {
  ratingHasError,
  ratingFetchDataSuccess,
  ratingPostDataSuccess,
  ratingPostRate
};
