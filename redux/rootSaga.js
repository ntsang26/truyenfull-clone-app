import { all } from "redux-saga/effects";
import getListStorySaga from "../saga/storySaga.js";
import { getListCategorySaga } from "../saga/index.js";
import getListChapSaga from "../saga/chapSaga";
export default function* root() {
  yield all([getListStorySaga(), getListCategorySaga(), getListChapSaga()]);
}
