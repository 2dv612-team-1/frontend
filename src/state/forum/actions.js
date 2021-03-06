import types from "./types";
import Client from "../../libs/Client";

export const forumHasError = (bool, err) => ({
  type: types.FORUM_HAS_ERROR,
  hasError: bool,
  errorMessage: err
});

export const forumIsLoading = bool => ({
  type: types.FORUM_IS_LOADING,
  isLoading: bool
});

export const forumFetchDataSuccess = forum => ({
  type: types.FORUM_FETCH_DATA_SUCCESS,
  forum
});

export const forumPostDataSuccess = (bool, message) => ({
  type: types.FORUM_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const forumClear = () => dispatch => {
  dispatch(forumIsLoading(false));
  dispatch(forumHasError(false, ""));
  dispatch(forumPostDataSuccess(false, ""));
};

export const forumFetchData = url => dispatch => {
  dispatch(forumIsLoading(true));
  Client.GET(url)
    .then(data => {
      // console.log(data);
      dispatch(forumFetchDataSuccess(data.data.threads));
      dispatch(forumIsLoading(false));
    })
    .catch(err => {
      // console.log(err);
      dispatch(forumIsLoading(false));
      dispatch(forumHasError(true, err));
    });
};

export const forumPostData = (urlPost, fields, urlFetch) => dispatch => {
  dispatch(forumIsLoading(true));
  dispatch(forumClear());
  Client.POST(urlPost, fields)
    .then(data => {
      if (data.status !== 201) {
        dispatch(forumHasError(true, data.message));
        dispatch(forumIsLoading(false));
      } else {
        dispatch(forumPostDataSuccess(true, data.message));
        dispatch(forumHasError(false));
        dispatch(forumIsLoading(false));
        dispatch(forumFetchData(urlFetch));
      }
    })
    .catch(err => {
      dispatch(forumHasError(true, err.message));
      dispatch(forumIsLoading(false));
    });
};

export const forumSearch = text => ({
  type: types.FORUM_SEARCH,
  text
});

export default {
  forumHasError,
  forumIsLoading,
  forumFetchDataSuccess,
  forumPostDataSuccess,
  forumFetchData,
  forumPostData,
  forumClear,
  forumSearch
};
