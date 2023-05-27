// import { GET_LIST_STORY, GET_LIST_STORY_SUCCESS } from "../constant/constant";
import {
  GET_LIST_CATEGORY,
  GET_LIST_CATEGORY_SUCCESS,
} from "../constant/categoryConstant";
export const getListCategory = (action) => {
  return {
    type: GET_LIST_CATEGORY,
    // payload,
  };
};

export const getListCategorySuccess = (payload) => {
  return {
    type: GET_LIST_CATEGORY_SUCCESS,
    payload,
  };
};
