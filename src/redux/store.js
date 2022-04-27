import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../redux/language';

export default configureStore({
  reducer: {
    language: languageReducer,
  },
});
