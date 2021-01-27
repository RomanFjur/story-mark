import { put, call, take } from "redux-saga/effects";
import { createFreshPostsChannel } from '../channels/socketGetPostsChannel';

export function* actualPostsSaga() {
  const channel = yield call(createFreshPostsChannel);
  while(true) {
    const posts = yield take(channel);
    yield put(posts);
  }
}