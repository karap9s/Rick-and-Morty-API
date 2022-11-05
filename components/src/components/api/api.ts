import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICards, TEpisodes, TGetPages } from 'components/interfaces/interfaces';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;
const episode = `${BASE_URL}/episode`;

export const getAllCharacters = async (page: number): Promise<ICards[]> => {
  const res = await fetch(`${character}/?page=${page}`);
  const data = await res.json();
  return data.results;
};

export const getFilterCharacters = async (
  value: string,
  name: string,
  status: string,
  gender: string,
  page?: number
): Promise<ICards[]> => {
  const res = await fetch(
    `${character}/?page=${page}&${value}=${name}&status=${status}&gender=${gender}`
  );
  const data = await res.json();
  return data.results;
};

// export const getPages = async (
//   value: string,
//   name: string,
//   status: string,
//   gender: string
// ): Promise<number> => {
//   const res = await fetch(`${character}/?${value}=${name}&status=${status}&gender=${gender}`);
//   const data = await res.json();
//   return data.info.pages;
// };

export const getPages = createAsyncThunk<number, TGetPages>('main/getPages', async (arg) => {
  const res = await fetch(
    `${character}/?${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
  );
  const data = await res.json();
  return data.info.pages;
});

export const getEpisodeData = async (num: number): Promise<TEpisodes> => {
  const res = await fetch(`${episode}/${num}`);
  const data = await res.json();
  return data;
};
