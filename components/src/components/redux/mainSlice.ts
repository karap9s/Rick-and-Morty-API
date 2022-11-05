import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEpisodeData, getFilterCharacters, getPages } from '../api/api';
import { ICards, TSeries } from '../interfaces/interfaces';

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
  content: [] as TSeries[],
  numberOfKey: 0,
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
    setContent(state) {
      state.content = [];
      state.numberOfKey = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPages.fulfilled, (state, action) => {
        state.pagesCount = action.payload;
      })
      .addCase(getFilterCharacters.fulfilled, (state, action) => {
        state.cardsArray = action.payload;
      })
      .addCase(getEpisodeData.fulfilled, (state, action) => {
        state.content = [
          ...state.content,
          {
            name: action.payload.name,
            date: action.payload.air_date,
            episode: action.payload.episode,
            key: (++state.numberOfKey).toString(),
          },
        ];
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
  setContent,
} = mainSlice.actions;
