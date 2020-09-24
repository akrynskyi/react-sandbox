import * as imagesActionTypes from './imagesActionTypes';

const initialState = {
  images: [],
  loading: false,
  selectedImageIdx: null,
  imagePopup: false,
  error: null,
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case imagesActionTypes.FETCH_IMAGES:
      return {
        ...state,
        loading: true,
      };

    case imagesActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        loading: false,
      };

    case imagesActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        images: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};