import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');
const endpointLoadUsers = client.endpoint('GET', '/users');

export function* getUsersSaga() {
  try {
    const user = yield call(endpointLoginAsUser, {"token": localStorage.getItem("token")});
    yield put({type: "LOGIN_USER_SUCCESS", payload: {...user}});
    const users = yield call(endpointLoadUsers);
    yield put({type: "GET_USERS_SUCCESS", payload: users});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}