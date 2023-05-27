import { combineReducers } from "redux";
import postReducer from "../reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});
export default rootReducer;
