import { combineReducers } from "redux";
import storyReducer from "../reducer/reducer";

const rootReducer = combineReducers({
  posts: storyReducer,
});
export default rootReducer;
