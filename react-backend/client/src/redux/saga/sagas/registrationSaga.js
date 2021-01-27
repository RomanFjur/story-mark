import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');

export function* registrationSaga(action) {
  try {
    const data = yield call(endpointCreateUser, action.payload);
    localStorage.setItem("token", data.token);
    yield put({type: "LOGIN_SUCCESS", payload: data.token});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}