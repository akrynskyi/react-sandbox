const photos = 'photos';
const key = '?client_id=lpU5kEEOVw2uzahu8gBhhXHHplWE2etKEYiOOuyLrfM';
const sig = Math.random();

export const apiUrl = `https://api.unsplash.com/${photos}${key}&sig=${sig}`;