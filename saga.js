import { call, put, takeLatest } from "redux-saga/effects";
// import { getPostData } from "./postAPI";
import callStory from "./callAPI/callStory";
import { getListPostSuccess } from "./action";

function* getListPostSaga(action) {
  try {
    const data = yield call(callStory);

    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

// function* postsSaga() {
//   yield takeLatest("GET_LIST_POST", getListPostSaga);
// }

// export default postsSaga;
export default function* root() {
  yield takeLatest("GET_LIST_POST", getListPostSaga);
}
