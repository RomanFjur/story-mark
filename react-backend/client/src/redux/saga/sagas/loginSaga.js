import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');

export function* loginSaga(action) {
  try {
    const data = yield call(endpointLoginAsUser, action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "LOGIN_SUCCESS", payload: data.token});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}