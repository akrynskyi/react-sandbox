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
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      }

    case userActionTypes.USER_AUTH_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};