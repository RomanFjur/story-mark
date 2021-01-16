import { takeEvery, put } from "redux-saga/effects";

import HTTPClient from '../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');
const endpointLoadUsers = client.endpoint('GET', '/users');
const endpointLoadUserPage = client.endpoint('GET', '/users/:id');
const endpointLoadUserPosts = client.endpoint('GET', '/users/:id/posts');
const endpointAddStatus = client.endpoint('PUT', '/users/:id');
const endpointAddUserPosts = client.endpoint('POST', '/posts');

export default function* watcherSaga() {
  yield takeEvery("LOGIN", loginSaga);
  yield takeEvery("REGISTRATION", registrationSaga);
  yield takeEvery("GET_USERS", getUsersSaga);
  yield takeEvery("LOAD_USER_PAGE", loadUserPageSaga);
  yield takeEvery("ADD_STATUS", addStatusSaga);
  yield takeEvery("LOGOUT", logoutSaga);
  yield takeEvery("ADD_POST", addPostSaga);
}

function* registrationSaga(action) {
  try {
    const data = yield endpointCreateUser(action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "LOGIN_SUCCESS", payload: data.token});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* loginSaga(action) {
  try {
    const data = yield endpointLoginAsUser(action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "LOGIN_SUCCESS", payload: data.token});
    // const user = yield endpointLoginAsUser(data);
    // yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* getUsersSaga() {
  try {
    const user = yield endpointLoginAsUser({"token": localStorage.getItem("token")});
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
    yield put({type: "GET_USERS_STARTED"});
    const users = yield endpointLoadUsers();
    yield put({type: "GET_USERS_SUCCESS", payload: users});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* loadUserPageSaga(action) {
  try {
    const user = yield endpointLoginAsUser({"token": localStorage.getItem("token")});
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
    const userData = yield endpointLoadUserPage(action.payload);
    yield put({type: "LOAD_USER_PAGE_SUCCESS", payload: userData});
    const userPosts = yield endpointLoadUserPosts(action.payload);
    yield put({type: "LOAD_USER_POSTS_SUCCESS", payload: userPosts});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* addStatusSaga(action) {
  try {
    const user = yield endpointAddStatus(action.payload);
    yield put({type: "ADD_STATUS_SUCCESS", payload: {...user}});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* logoutSaga() {
  try {
    localStorage.removeItem("token");
    yield put({type: "LOGOUT_SUCCESS"});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}

function* addPostSaga(action) {
  try {
    const posts = yield endpointAddUserPosts(action.payload);
    yield put({type: "ADD_POST_SUCCESS", payload: posts});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}