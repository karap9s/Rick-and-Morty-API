import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICards, TEpisodes, TGetPages } from 'components/interfaces/interfaces';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;
const episode = `${BASE_URL}/episode`;

export const getAllCharacters = createAsyncThunk<ICards[], { page: number }>(
  'main/getAllCharacters',
  async (arg) => {
    const res = await fetch(`${character}/?page=${arg.page}`);
    const data = await res.json();
    return data.results;
  }
);

export const getFilterCharacters = createAsyncThunk<ICards[], TGetPages>(
  'main/getFilterCharacters',
  async (arg) => {
    const res = await fetch(
      `${character}/?page=${arg.page}&${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
    );
    const data = await res.json();
    return data.results;
  }
);

export const getPages = createAsyncThunk<number, TGetPages>('main/getPages', async (arg) => {
  const res = await fetch(
    `${character}/?${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
  );
  const data = await res.json();
  return data.info.pages;
});

export const getEpisodeData = createAsyncThunk<TEpisodes, { result: number }>(
  'main/getEpisodeData',
  async (arg) => {
    const res = await fetch(`${episode}/${arg.result}`);
    const data = await res.json();
    return data;
  }
);
