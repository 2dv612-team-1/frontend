import types from "./types";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";

export const ratingsHasError = bool => ({
  type: types.RATINGS_HAS_ERROR,
  hasError: bool
});

export const ratingsIsLoading = bool => ({
  type: types.RATINGS_IS_LOADING,
  isLoading: bool
});

export const ratingsFetchDataSuccess = ratings => ({
  type: types.RATINGS_FETCH_DATA_SUCCESS,
  ratings
});

export const ratingsPostDataSuccess = (bool, message) => ({
  type: types.RATINGS_POST_DATA_SUCCESS,
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

export const ratingsPostData = (url, obj) => dispatch => {
  const rating = Object.assign({}, obj);
  rating.jwt = Auth.getToken();
  Client.POST(url).then(data => {});
};

export default {
  ratingsHasError,
  ratingsIsLoading,
  ratingsFetchDataSuccess,
  ratingsPostDataSuccess,
  ratingsFetchData
};
