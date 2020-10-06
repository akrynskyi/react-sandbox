import axios from 'axios';
import { signUpEndpoint, signInEndpoint, baseDbUrl } from './endpoints';

const AUTH_TOKEN_KEY = 'auth-data';

const setToken = (data) => {
  const { expiresIn, idToken, localId } = data;
  const expDate = new Date().setSeconds(expiresIn);
  const token = { expDate, token: idToken, uid: localId };
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(token));
};

const authWithEmailAndPassword = async (endpoint, email, password) => {
  const { data } = await axios.post(endpoint, { email, password, returnSecureToken: true });
  setToken(data);
  return data;
};

export const signUp = async (credentials) => {
  const { email, password, ...userData } = credentials;
  const { localId } = await authWithEmailAndPassword(signUpEndpoint, email, password);
  const { data } = await axios.put(`${baseDbUrl}/users/${localId}.json`, { email, ...userData });
  return data;
};

export const signIn = async (credentials) => {
  const { email, password } = credentials;
  const { localId } = await authWithEmailAndPassword(signInEndpoint, email, password);
  const { data } = await axios.get(`${baseDbUrl}/users/${localId}.json`);
  return data;
};