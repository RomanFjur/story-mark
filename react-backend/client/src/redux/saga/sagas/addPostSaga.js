import { put, call } from "redux-saga/effects";
import HTTPClient from '../../../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointAddUserPosts = client.endpoint('POST', '/posts');

export function* addPostSaga(action) {
  try {
    const posts = yield call(endpointAddUserPosts, action.payload);
    yield put({type: "ADD_POST_SUCCESS", payload: posts});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}