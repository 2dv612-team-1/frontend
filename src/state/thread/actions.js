import types from "./types";
import Client from "../../libs/Client";

export const threadHasError = (bool, err) => ({
  type: types.THREAD_HAS_ERROR,
  hasError: bool,
  errorMessage: err
});

export const threadIsLoading = bool => ({
  type: types.THREAD_IS_LOADING,
  isLoading: bool
});

export const threadFetchDataSuccess = thread => ({
  type: types.THREAD_FETCH_DATA_SUCCESS,
  thread
});

export const threadPostDataSuccess = (bool, message) => ({
  type: types.THREAD_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const getThread = url => dispatch => {
  dispatch(threadIsLoading(true));
  Client.GET(url)
    .then(data => {
      if (data.status === 200) {
        dispatch(threadFetchDataSuccess(data.data));
        dispatch(threadIsLoading(false));
      } else {
        dispatch(threadFetchDataSuccess([]));
        console.log(data);
      }
    })
    .catch(err => {
      dispatch(threadIsLoading(false));
      dispatch(threadHasError(true));
    });
};

export const postReply = (url1, data, url2) => dispatch => {
  dispatch(threadIsLoading(true));
  Client.POST(url1, data)
    .then(data => {
      if (data.status === 201) {
        dispatch(threadIsLoading(false));
        dispatch(getThread(url2));
      }
    })
    .catch(err => {
      dispatch(threadHasError(true, err.message));
      dispatch(threadIsLoading(false));
    });
};

export const patch = (url, jwt) => dispatch => {
  Client.PATCH(url, jwt)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  threadHasError,
  threadIsLoading,
  threadFetchDataSuccess,
  getThread,
  postReply,
  patch
};
