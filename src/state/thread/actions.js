import types from "./types";
import Client from "../../libs/Client";

const threadHasError = (bool, err) => ({type: types.FORUM_HAS_ERROR, hasError: bool, errorMessage: err});

const threadIsLoading = bool => ({type: types.FORUM_IS_LOADING, isLoading: bool});

const threadFetchDataSuccess = thread => ({type: types.THREAD_FETCH_DATA_SUCCESS, thread});

export const getThread = url => dispatch => {
  dispatch(threadIsLoading(true));
  Client
    .GET(url)
    .then(data => {
      dispatch(threadFetchDataSuccess(data));
      dispatch(threadIsLoading(false));
      console.log(data);
    })
    .catch(err => {
      dispatch(threadIsLoading(false));
      dispatch(threadHasError(true));
      console.log(err);
    });
}

export default {
  getThread
}
