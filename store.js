import {configureStore} from '@reduxjs/toolkit';
import countryReducer from './redux/CountrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
