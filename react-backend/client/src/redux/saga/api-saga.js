import { takeEvery, fork } from "redux-saga/effects";

import { registrationSaga } from './sagas/registrationSaga';
import { loginSaga } from './sagas/loginSaga';
import { getUsersSaga } from './sagas/getUsersSaga';
import { loadUserPageSaga } from './sagas/loadUserPageSaga';
import { addStatusSaga } from './sagas/addStatusSaga';
import { logoutSaga } from './sagas/logoutSaga';
import { addPostSaga } from './sagas/addPostSaga';
import { actualUsersSaga } from './sagas/actualUsersSaga';
import { socketGetUsersSaga } from './sagas/socketGetUsersSaga';
import { actualPostsSaga } from './sagas/actualPostsSaga';
import { socketGetPostsSaga } from './sagas/socketGetPostsSaga';

export default function* watcherSaga() {
  yield takeEvery("LOGIN", loginSaga);
  yield takeEvery("REGISTRATION", registrationSaga);
  yield takeEvery("GET_USERS", getUsersSaga);
  yield takeEvery("LOAD_USER_PAGE", loadUserPageSaga);
  yield takeEvery("ADD_STATUS", addStatusSaga);
  yield takeEvery("LOGOUT", logoutSaga);
  yield takeEvery("ADD_POST", addPostSaga);
  yield takeEvery("SOCKET_GET_USERS", socketGetUsersSaga);
  yield takeEvery("SOCKET_GET_POSTS", socketGetPostsSaga);
  yield fork(actualUsersSaga);
  yield fork(actualPostsSaga);
}