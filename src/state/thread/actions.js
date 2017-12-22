import types from "./types";
import Client from "../../libs/Client";

export const threadHasError = (bool, err) => ({type: types.THREAD_HAS_ERROR, hasError: bool, errorMessage: err});

export const threadIsLoading = bool => ({type: types.THREAD_IS_LOADING, isLoading: bool});

export const threadFetchDataSuccess = thread => ({type: types.THREAD_FETCH_DATA_SUCCESS, thread});

export const threadPostDataSuccess = (bool, message) => ({
  type: types.THREAD_POST_DATA_SUCCESS,
  isSuccess: bool,
  successMessage: message
});

export const getThread = url => dispatch => {
  dispatch(threadIsLoading(true));
  Client
    .GET(url)
    .then(data => {
      dispatch(threadFetchDataSuccess(data.data));
      dispatch(threadIsLoading(false));
      console.log(data);
    })
    .catch(err => {
      dispatch(threadIsLoading(false));
      dispatch(threadHasError(true));
      console.log(err);
    });
};

export const postReply = (url, data) => dispatch => {
  dispatch(threadIsLoading(true));
  Client
    .POST(url, data)
    .then(data => {

    })
    .catch(err => {
      dispatch(threadHasError(true, err.message));
      dispatch(threadIsLoading(false));
    });
}

export default {
  threadHasError,
  threadIsLoading,
  threadFetchDataSuccess,
  getThread,
  postReply
};
