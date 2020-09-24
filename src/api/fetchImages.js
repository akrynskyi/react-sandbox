import { apiUrl } from './endpoints';

export const fetchImages = async (page = 1, perPage = 10) => {
  const resp = await fetch(`${apiUrl}&page=${page}&per_page=${perPage}`);
  const data = await resp.json();

  return data;
};