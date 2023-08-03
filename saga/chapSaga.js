import { call, put, takeLatest } from "redux-saga/effects";

import callChap from "../services/callChap";
import { getListChapSuccess } from "../action/chapAction";

import { GET_LIST_CHAP } from "../constant/chapConstant";

function* getListChapSaga(action) {
  console.log("action gửi lên là ", action);
  try {
    const data = yield call(callChap, action.payload);
    // console.log("console log data", data);
    // console.log("data =========", data);
    yield put(getListChapSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield takeLatest(GET_LIST_CHAP, getListChapSaga);
}
