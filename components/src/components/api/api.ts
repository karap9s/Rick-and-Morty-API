import { ICards } from 'components/interfaces/interfaces';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;

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

export const getPages = async (
  value: string,
  name: string,
  status: string,
  gender: string
): Promise<number> => {
  const res = await fetch(`${character}/?${value}=${name}&status=${status}&gender=${gender}`);
  const data = await res.json();
  return data.info.pages;
};
