import { combineReducers } from "redux";
import storyReducer from "../reducer/reducer";
import categoryReducer from "../reducer/categoryReducer";

const rootReducer = combineReducers({
  posts: storyReducer,
  category: categoryReducer,
});
export default rootReducer;
