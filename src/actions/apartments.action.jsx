import axios from 'axios';

//
export const fetchApartments = () => {
  return async dispatch => {
    const response = await axios
      .get('https://www.holidu.de/rest/search?regionId=22458')
      // chain and return to use later
      .then(response => {
        return response.data.apartments;
      })
      // chain and return if promise was rejected
      .catch(error => {
        console.log(error);
      });
    dispatch({ type: 'FETCH_APARTMENTS', payload: response });
  };
};
