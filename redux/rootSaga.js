import { all } from "redux-saga/effects";
import getListStorySaga from "../saga/storySaga.js";
export default function* root() {
  yield all([getListStorySaga()]);
}
