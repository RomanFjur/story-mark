import { put, call } from "redux-saga/effects";
import { socket } from '../../../sockets/socket';

export function* socketGetPostsSaga(action) {
  try {
    yield call(socket.emit('subscribeToPosts', 3000));
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}