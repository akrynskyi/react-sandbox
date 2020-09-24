import * as imagesActionTypes from './imagesActionTypes';

export const fetchImages = () => ({ type: imagesActionTypes.FETCH_IMAGES });
export const fetchImagesSuccess = (payload) => ({ type: imagesActionTypes.FETCH_IMAGES_SUCCESS, payload });
export const fetchImagesFailure = (payload) => ({ type: imagesActionTypes.FETCH_IMAGES_FAILURE, payload });