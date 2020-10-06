import { takeEvery, call, put } from 'redux-saga/effects';
import * as userActionTypes from './userActionTypes';
import { userAuthSuccess, userAuthFailure } from './userActions';
import { signUp, signIn } from '../../api';

function* register({ payload }) {
  try {
    const user = yield call(signUp, payload);
    yield put(userAuthSuccess(user));
  } catch ({ response }) {
    const { error } = response.data;
    yield put(userAuthFailure(error.message));
  }
}

function* login({ payload }) {
  try {
    const user = yield call(signIn, payload);
    yield put(userAuthSuccess(user));
  } catch ({ response }) {
    const { error } = response.data;
    yield put(userAuthFailure(error.message));
  }
}

export function* userSaga() {
  yield takeEvery(userActionTypes.USER_SIGN_UP, register);
  yield takeEvery(userActionTypes.USER_SIGN_IN, login);
}