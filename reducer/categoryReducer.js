// import { GET_LIST_STORY, GET_LIST_STORY_SUCCESS } from '../constant/constant.js';
import {
  GET_LIST_CATEGORY,
  GET_LIST_CATEGORY_SUCCESS,
} from "../constant/categoryConstant";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_CATEGORY:
      return 0;
    case GET_LIST_CATEGORY_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        posts: data,
        load: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
