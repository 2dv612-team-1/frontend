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

export const ratingPostRate = url => dispatch => {
  dispatch(ratingFetchDataSuccess(true));
  Client.POST(url, obj).then(data => {
    dispatch(productsFetchDataSuccess(data.data.rating));
  });
};

export default {
  ratingHasError,
  ratingFetchDataSuccess,
  ratingPostDataSuccess,
  ratingPostRate
};
