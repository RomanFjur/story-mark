import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointAddStatus = client.endpoint('PUT', '/users/:id');

export function* addStatusSaga(action) {
  try {
    const user = yield call(endpointAddStatus, action.payload);
    yield put({type: "ADD_STATUS_SUCCESS", payload: {...user}});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}