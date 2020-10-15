import { takeEvery, call, put } from 'redux-saga/effects';
import * as userActionTypes from './userActionTypes';
import { userAuthSuccess, userAuthFailure, userDataLoaded, userDataLoadFailure } from './userActions';
import { signUp, signIn, getTokenFromStorage, loadUser } from '../../api';
import { history } from '../../index';

function* register({ payload }) {
  try {
    const user = yield call(signUp, payload);
    yield put(userAuthSuccess(user));
    history.push('/');
  } catch ({ response }) {
    const { error } = response.data;
    yield put(userAuthFailure(error.message));
  }
}

function* login({ payload }) {
  try {
    const user = yield call(signIn, payload);
    yield put(userAuthSuccess(user));
    history.push('/');
  } catch ({ response }) {
    const { error } = response.data;
    yield put(userAuthFailure(error.message));
  }
}

function* loadUserData() {
  try {
    const authData = yield call(getTokenFromStorage);

    if (!authData) return;

    const user = yield call(loadUser, authData.uid);
    yield put(userDataLoaded(user));
  } catch ({ response }) {
    const { error } = response.data;
    yield put(userDataLoadFailure(error));
  }
}

export function* userSaga() {
  yield takeEvery(userActionTypes.USER_SIGN_UP, register);
  yield takeEvery(userActionTypes.USER_SIGN_IN, login);
  yield takeEvery(userActionTypes.USER_DATA_LOAD, loadUserData);
}