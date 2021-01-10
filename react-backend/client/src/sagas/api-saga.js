import { takeEvery, put } from "redux-saga/effects";

import HTTPClient from '../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');
const endpointLoadUsers = client.endpoint('GET', '/users');

export default function* watcherSaga() {
  yield takeEvery("ADD_USER", registerSaga);
  yield takeEvery("GET_TOKEN", loginSaga);
  yield takeEvery("GET_USERS", usersSaga);
}

function* loginSaga(action) {
  try {
    yield put({type: "GET_TOKEN_STARTED"});
    const data = yield endpointLoginAsUser(action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "GET_TOKEN_SUCCESS", payload: data.token});
    const user = yield endpointLoginAsUser(data);
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* registerSaga(action) {
  try {
    yield put({type: "GET_TOKEN_STARTED"});
    const data = yield endpointCreateUser(action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "GET_TOKEN_SUCCESS", payload: data.token});
    const user = yield endpointLoginAsUser(data);
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* usersSaga() {
  try {
    yield put({type: "GET_USERS_STARTED"});
    const users = yield endpointLoadUsers();
    yield put({type: "GET_USERS_SUCCESS", payload: users});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}