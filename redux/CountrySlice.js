import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  country: {
    flag: 'https://disease.sh/assets/img/flags/pk.png',
    name: 'Pakistan',
    value: 'PK',
  },
};
export const CountrySlice = createSlice({
  name: 'SelectedCountry',
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});
export const {addCountry} = CountrySlice.actions;

export default CountrySlice.reducer;
