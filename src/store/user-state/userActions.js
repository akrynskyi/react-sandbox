import * as userActionTypes from './userActionTypes';

export const userSignUp = (payload) => ({ type: userActionTypes.USER_SIGN_UP, payload });
export const userSignIn = (payload) => ({ type: userActionTypes.USER_SIGN_IN, payload });
export const userAuthSuccess = (payload) => ({ type: userActionTypes.USER_AUTH_SUCCESS, payload });
export const userAuthFailure = (payload) => ({ type: userActionTypes.USER_AUTH_FAILURE, payload });