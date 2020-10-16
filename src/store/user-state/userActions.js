import * as userActionTypes from './userActionTypes';

export const userSignUp = (payload) => ({ type: userActionTypes.USER_SIGN_UP, payload });
export const userSignIn = (payload) => ({ type: userActionTypes.USER_SIGN_IN, payload });
export const userLogOut = () => ({ type: userActionTypes.USER_LOG_OUT });
export const userAuthSuccess = (payload) => ({ type: userActionTypes.USER_AUTH_SUCCESS, payload });
export const userAuthFailure = (payload) => ({ type: userActionTypes.USER_AUTH_FAILURE, payload });

export const userDataLoad = () => ({ type: userActionTypes.USER_DATA_LOAD });
export const userDataLoaded = (payload) => ({ type: userActionTypes.USER_DATA_LOADED, payload });
export const userDataLoadFailure = (payload) => ({ type: userActionTypes.USER_DATA_LOAD_FAILURE, payload });