import { GET_LIST_STORY, GET_LIST_STORY_SUCCESS } from "../constant/constant";

export const getListPost = (action) => {
  return {
    type: GET_LIST_STORY,
    // payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: GET_LIST_STORY_SUCCESS,
    payload,
  };
};
