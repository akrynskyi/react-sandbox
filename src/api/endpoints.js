// images

const photos = 'photos';
const imgKey = '?client_id=lpU5kEEOVw2uzahu8gBhhXHHplWE2etKEYiOOuyLrfM';
const sig = Math.random();

export const photosEndpoint = `https://api.unsplash.com/${photos}${imgKey}&sig=${sig}`;

// auth

const authKey = 'AIzaSyBJo38TkgvUwxPPUVc1ecXK-_5wlQ0G-fY';
const baseAuthUrl = 'https://identitytoolkit.googleapis.com/v1/accounts';

export const signUpEndpoint = `${baseAuthUrl}:signUp?key=${authKey}`;
export const signInEndpoint = `${baseAuthUrl}:signInWithPassword?key=${authKey}`;

// db

export const baseDbUrl = 'https://mycamerashoot.firebaseio.com';