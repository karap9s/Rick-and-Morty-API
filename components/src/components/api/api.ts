import { ICards } from 'components/interfaces/interfaces';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;

export const getAllCharacters = async (page: number): Promise<ICards[]> => {
  const res = await fetch(`${character}/?page=${page}`);
  const data = await res.json();
  return data.results;
};

export const getFilterCharacters = async (name: string): Promise<ICards[]> => {
  const res = await fetch(`${character}/?name=${name}`);
  const data = await res.json();
  return data.results;
};
