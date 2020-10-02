import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { imagesReducer } from './images-state';
import { userReducer } from './user-state';
import { imagesSaga } from './images-state/imagesSagas';

const reducers = combineReducers({
  images: imagesReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([ imagesSaga() ]);
}

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);