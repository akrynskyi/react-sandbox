import { apiUrl } from './endpoints';

export const fetchImages = async (page, perPage) => {
  const resp = await fetch(`${apiUrl}&page=${page}&per_page=${perPage}`);
  const data = await resp.json();
  
  return data.map((img) => ({
    description: img.alt_description,
    color: img.color,
    height: img.height,
    width: img.width,
    id: img.id,
    likes: img.likes,
    urls: img.urls,
    username: img.user.first_name
  }));
};