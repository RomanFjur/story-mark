import { put, call, take } from "redux-saga/effects";
import { createFreshUsersChannel } from '../channels/socketGetUsersChannel';

export function* actualUsersSaga() {
  const channel = yield call(createFreshUsersChannel);
  while(true) {
    const users = yield take(channel);
    yield put(users);
  }
}