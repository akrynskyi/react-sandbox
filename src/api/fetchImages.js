import { photosEndpoint } from './endpoints';

class HttpErrorResponse extends Error {
  constructor(errors = {}) {
    super();
    this.response = errors;
  }
}

export const fetchImages = async (page, perPage) => {
  const resp = await fetch(`${photosEndpoint}&page=${page}&per_page=${perPage}`);
  const data = await resp.json();

  if (!resp.ok) {
    throw new HttpErrorResponse(data);
  }
  
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