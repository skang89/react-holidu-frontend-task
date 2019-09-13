export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_APARTMENTS':
      return action.payload;
    default:
      return state;
  }
};
