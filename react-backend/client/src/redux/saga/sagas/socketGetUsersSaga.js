import { put, call } from "redux-saga/effects";
import { socket } from '../../../sockets/socket';

export function* socketGetUsersSaga(action) {
  try {
    yield call(socket.emit('subscribeToUsers', 3000));
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}