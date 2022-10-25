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
  gender: string
) => {
  const res = await fetch(`${character}/?${value}=${name}&status=${status}&gender=${gender}`);
  const data = await res.json();
  return data.results;
};

export const getEpisode = async (num: number) => {
  const res = await fetch(`${episode}/${num}`);
  const data = await res.json();
  return data.episode;
};

export const getAirDate = async (num: number) => {
  const res = await fetch(`${episode}/${num}`);
  const data = await res.json();
  return data.air_date;
};

export const getEpisodeName = async (num: number) => {
  const res = await fetch(`${episode}/${num}`);
  const data = await res.json();
  return data.name;
};
