import { call, put, takeLatest } from "redux-saga/effects";
import callStory from "../services/callStory";
import { getListStorySuccess } from "../action/action";
import { GET_LIST_STORY } from '../constant/constant';

function* getListStorySaga(action) {
  try {
    const data = yield call(callStory);
    yield put(getListStorySuccess(data));
  } catch (error) {
    console.log(error)
  }
}

export default function* root() {
  yield takeLatest(GET_LIST_STORY, getListStorySaga);
}
