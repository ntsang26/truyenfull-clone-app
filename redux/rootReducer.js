import { combineReducers } from "redux";
import storyReducer from "../reducer/reducer";
import categoryReducer from "../reducer/categoryReducer";
import chapReducer from "../reducer/chapReducer";

const rootReducer = combineReducers({
  posts: storyReducer,
  category: categoryReducer,
  chap: chapReducer,
});
export default rootReducer;
