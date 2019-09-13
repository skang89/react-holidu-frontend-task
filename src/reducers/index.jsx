import { combineReducers } from 'redux';

import apartmentReducer from './apartments.reducer';
import loadingReducer from './loading.reducer';

export default combineReducers({
  apartments: apartmentReducer,
  loading: loadingReducer
});
