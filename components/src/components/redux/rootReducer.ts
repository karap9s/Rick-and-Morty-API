import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './toolkitSlice';

const rootReducer = combineReducers({
  main: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
