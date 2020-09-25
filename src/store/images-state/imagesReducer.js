import * as imagesActionTypes from './imagesActionTypes';

const initialState = {
  images: [],
  loading: false,
  initialLoading: true,
  selectedImageIdx: null,
  imagePopup: false,
  page: 1,
  perPage: 5,
  error: null,
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case imagesActionTypes.FETCH_IMAGES:
      return {
        ...state,
        loading: true,
        initialLoading: !state.images.length
      };

    case imagesActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: [...state.images, ...action.payload],
        loading: false,
        initialLoading: false,
        page: state.page + 1
      };

    case imagesActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        images: [],
        loading: false,
        initialLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};