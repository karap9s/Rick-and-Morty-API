const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;
const episode = `${BASE_URL}/episode`;

export const getAllCharacters = async (page: number) => {
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
) => {
  const res = await fetch(
    `${character}/?page=${page}&${value}=${name}&status=${status}&gender=${gender}`
  );
  const data = await res.json();
  return data.results;
};

export const getPages = async (value: string, name: string, status: string, gender: string) => {
  const res = await fetch(`${character}/?${value}=${name}&status=${status}&gender=${gender}`);
  const data = await res.json();
  return data.info.pages;
};

export const getEpisodeData = async (num: number) => {
  const res = await fetch(`${episode}/${num}`);
  const data = await res.json();
  return data;
};
