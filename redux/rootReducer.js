import { combineReducers } from "redux";
import postReducer from "../reducer/reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});
export default rootReducer;
