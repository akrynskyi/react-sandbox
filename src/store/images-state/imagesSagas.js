import { call, put, takeEvery } from 'redux-saga/effects';
import * as imagesActionTypes from './imagesActionTypes';
import { fetchImagesSuccess, fetchImagesFailure } from './imagesActions';

import { fetchImages } from '../../api/fetchImages';

function* requestImages() {
  try {
    const data = yield call(fetchImages);
    yield put(fetchImagesSuccess(data));
  } catch (error) {
    yield put(fetchImagesFailure(error));
  }
}

export function* imagesSaga() {
  yield takeEvery(imagesActionTypes.FETCH_IMAGES, requestImages);
}