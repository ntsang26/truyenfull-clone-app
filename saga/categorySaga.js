import { call, put, takeLatest } from "redux-saga/effects";
import callCategory from "../services/callCategory";
import { getListCategorySuccess } from "../action/categoryAction";
import { GET_LIST_CATEGORY } from "../constant/categoryConstant";

function* getListCategorySaga(action) {
  try {
    const data = yield call(callCategory);
    // console.log("data =========", data);
    yield put(getListCategorySuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield takeLatest(GET_LIST_CATEGORY, getListCategorySaga);
}
