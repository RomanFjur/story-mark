import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');
const endpointLoadUserPage = client.endpoint('GET', '/users/:id');
const endpointLoadUserPosts = client.endpoint('GET', '/users/:id/posts');

export function* loadUserPageSaga(action) {
  try {
    const user = yield call(endpointLoginAsUser, {"token": localStorage.getItem("token")});
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
    const userData = yield call(endpointLoadUserPage, action.payload);
    yield put({type: "LOAD_USER_PAGE_SUCCESS", payload: userData});
    const userPosts = yield call(endpointLoadUserPosts, action.payload);
    yield put({type: "LOAD_USER_POSTS_SUCCESS", payload: userPosts});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}