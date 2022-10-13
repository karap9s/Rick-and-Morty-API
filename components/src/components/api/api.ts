const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;

export const getAllCharacters = async (page: number) => {
  const res = await fetch(`${character}/?page=${page}`);
  const data = await res.json();
  return data.results;
};
