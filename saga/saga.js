import { call, put, takeLatest } from "redux-saga/effects";
import callStory from "./callAPI/callStory";
import { getListPostSuccess } from "../action/action";

function* getListPostSaga(action) {
  try {
    const data = yield call(callStory);
    yield put(getListPostSuccess(data));
  } catch (error) {
    console.log(error)
  }
}

export default function* root() {
  yield takeLatest("GET_LIST_POST", getListPostSaga);
}
