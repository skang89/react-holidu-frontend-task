export default (state = true, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return action.payload;
    case 'FETCH_APARTMENTS':
      return false;
    default:
      return state;
  }
};
