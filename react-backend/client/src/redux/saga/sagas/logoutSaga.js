import { put } from "redux-saga/effects";

export function* logoutSaga() {
  try {
    localStorage.removeItem("token");
    yield put({type: "LOGOUT_SUCCESS"});
  } catch (e) {
    yield put({type: "FAILURE", payload: {e}});
  }
}