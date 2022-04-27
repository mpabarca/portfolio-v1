import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  languageSelected: 'english',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    showLanguage: (state) => {
      state.languageSelected;
    },
    changeLanguage: (state, action) => {
      state.languageSelected = action.payload;
    },
  },
});

export const { showLanguage, changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
