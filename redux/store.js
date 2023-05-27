import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import postsSaga from "../saga";
import postReducer from "../reducer";
import root from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  //   postReducer,
  applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(postsSaga);
sagaMiddleware.run(root);

export default store;
