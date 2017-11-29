import types from "./types";
import Client from "../../libs/Client";

export const representativesHasError = bool => ({
  type: types.REPRESENTATIVES_HAS_ERROR,
  hasError: bool
});

export const representativesIsLoading = bool => ({
  type: types.REPRESENTATIVES_IS_LOADING,
  isLoading: bool
});

export const representativesFetchDataSuccess = representatives => ({
  type: types.REPRESENTATIVES_FETCH_DATA_SUCCESS,
  representatives
});

export const representativesFetchData = url => dispatch => {
  dispatch(representativesIsLoading(true));
  Client.GET(url)
    .then(data => {
      dispatch(representativesFetchDataSuccess(data.representatives));
    })
    .catch(() => {
      dispatch(representativesIsLoading(false));
      dispatch(representativesHasError(true));
    });
};

export default {
  representativesHasError,
  representativesIsLoading,
  representativesFetchDataSuccess,
  representativesFetchData
};
