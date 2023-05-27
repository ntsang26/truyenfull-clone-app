import { GET_LIST_STORY, GET_LIST_STORY_SUCCESS } from "../constant/constant";

export const getListStory = (action) => {
  return {
    type: GET_LIST_STORY,
    // payload,
  };
};

export const getListStorySuccess = (payload) => {
  return {
    type: GET_LIST_STORY_SUCCESS,
    payload,
  };
};
