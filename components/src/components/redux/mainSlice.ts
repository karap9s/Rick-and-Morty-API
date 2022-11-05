import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFilterCharacters, getPages } from '../api/api';
import { ICards } from '../interfaces/interfaces';

const initialState = {
  page: JSON.parse(localStorage.getItem('page') || JSON.stringify(1)),
  gender: localStorage.getItem('gender') || '',
  status: localStorage.getItem('status') || '',
  name: '',
  type: 'name',
  card: {} as ICards,
  pagesCount: 0,
  currentCharacter: '',
  active: localStorage.getItem('activePage') || 'home',
  cardsArray: [] as ICards[],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment(state) {
      if (state.page !== state.pagesCount) {
        state.page = state.page + 1;
      }
    },
    decrement(state) {
      if (state.page !== 1) {
        state.page = state.page - 1;
      }
    },
    pageHandler(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCard(state, action: PayloadAction<ICards>) {
      state.card = action.payload;
    },
    setCurrentCharacter(state, action: PayloadAction<string>) {
      state.currentCharacter = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPages.fulfilled, (state, action) => {
        state.pagesCount = action.payload;
      })
      .addCase(getFilterCharacters.fulfilled, (state, action) => {
        state.cardsArray = action.payload;
      });
  },
});

export default mainSlice.reducer;

export const {
  increment,
  decrement,
  pageHandler,
  setCard,
  setCurrentCharacter,
  setName,
  setGender,
  setType,
  setStatus,
} = mainSlice.actions;
