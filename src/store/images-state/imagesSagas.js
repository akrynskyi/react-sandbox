import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as imagesActionTypes from './imagesActionTypes';
import { fetchImagesSuccess, fetchImagesFailure } from './imagesActions';

import { fetchImages } from '../../api/fetchImages';

const getParams = ({ images }) => ({ page: images.page, perPage: images.perPage });

function* requestImages() {
  try {
    const { page, perPage } = yield select(getParams);
    const data = yield call(fetchImages, page, perPage);
    yield put(fetchImagesSuccess(data));
  } catch ({ response }) {
    yield put(fetchImagesFailure(response.errors));
  }
}

export function* imagesSaga() {
  yield takeEvery(imagesActionTypes.FETCH_IMAGES, requestImages);
}