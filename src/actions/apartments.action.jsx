import axios from 'axios';

export const fetchApartments = () => {
  return async dispatch => {
    const response = await axios
      .get('https://www.holidu.de/rest/search?regionId=22458')
      .then(response => {
        return response.data.apartments;
      })
      .catch(error => {
        console.log(error);
      });
    dispatch({ type: 'FETCH_APARTMENTS', payload: response });
  };
};
