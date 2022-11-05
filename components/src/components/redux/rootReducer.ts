import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import mainSlice from './mainSlice';

const rootReducer = combineReducers({
  main: mainSlice,
  form: formSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
