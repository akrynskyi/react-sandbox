import * as imagesActionTypes from './imagesActionTypes';

const initialState = {
  images: [],
  loading: false,
  initialLoading: true,
  selectedImageIdx: null,
  imageModal: false,
  page: 1,
  perPage: 20,
  error: null,
};

const getImageIdx = (images, imgId) => images.findIndex(({id}) => imgId === id);
const nextImage = (images, idx) => (idx < (images.length - 1) ? idx + 1 : idx);
const prevImage = (idx) => (idx !== 0 ? idx - 1 : 0);

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

    case imagesActionTypes.IMAGE_MODAL_OPEN:
      return {
        ...state,
        imageModal: true,
        selectedImageIdx: getImageIdx(state.images, action.payload),
      };

    case imagesActionTypes.IMAGE_MODAL_CLOSE:
      return {
        ...state,
        imageModal: false,
        selectedImageIdx: null,
      };

    case imagesActionTypes.IMAGE_MODAL_PREV_IMAGE:
      return {
        ...state,
        selectedImageIdx: prevImage(state.selectedImageIdx),
      };

    case imagesActionTypes.IMAGE_MODAL_NEXT_IMAGE:
      return {
        ...state,
        selectedImageIdx: nextImage(state.images, state.selectedImageIdx),
      };

    default:
      return state;
  }
};