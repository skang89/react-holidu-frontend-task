export const loadingState = loading => {
  return dispatch => {
    dispatch({ type: 'FETCH_LOADING', payload: loading });
  };
};
