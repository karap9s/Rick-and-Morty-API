import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCards } from '../interfaces/interfaces';

const initialState = {
  accept: false,
  disabled: true,
  count: 0,
  storage: JSON.parse(localStorage.getItem('formStorage') || JSON.stringify([] as IFormCards[])),
  nameError: false,
  surnameError: false,
  birthError: false,
  avatarError: false,
  acceptError: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setAccept(state, action: PayloadAction<boolean>) {
      state.accept = action.payload;
    },
    setDisabled(state, action: PayloadAction<boolean>) {
      state.disabled = action.payload;
    },
    setNameError(state, action: PayloadAction<boolean>) {
      state.nameError = action.payload;
    },
    setSurnameError(state, action: PayloadAction<boolean>) {
      state.surnameError = action.payload;
    },
    setBirthError(state, action: PayloadAction<boolean>) {
      state.birthError = action.payload;
    },
    setAvatarError(state, action: PayloadAction<boolean>) {
      state.avatarError = action.payload;
    },
    setAcceptError(state, action: PayloadAction<boolean>) {
      state.acceptError = action.payload;
    },
    setStorage(state, action: PayloadAction<IFormCards[]>) {
      state.storage = action.payload;
    },
    countIncrement(state) {
      state.count = state.count + 1;
    },
  },
});

export default formSlice.reducer;

export const {
  setAccept,
  setDisabled,
  setNameError,
  setSurnameError,
  setBirthError,
  setAvatarError,
  setAcceptError,
  setStorage,
  countIncrement,
} = formSlice.actions;
