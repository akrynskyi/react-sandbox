import * as userActionTypes from './userActionTypes';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_SIGN_UP:
    case userActionTypes.USER_SIGN_IN:
      return {
        ...state,
        loading: true,
      };

    case userActionTypes.USER_AUTH_SUCCESS:
    case userActionTypes.USER_DATA_LOADED:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case userActionTypes.USER_AUTH_FAILURE:
    case userActionTypes.USER_DATA_LOAD_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case userActionTypes.USER_LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};