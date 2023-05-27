import { all } from "redux-saga/effects";
import getListPostSaga from "../saga";
export default function* root() {
  yield all([getListPostSaga()]);
}
