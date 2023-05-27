import { GET_LIST_STORY, GET_LIST_STORY_SUCCESS } from '../constant/constant.js';

const storyReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_STORY:
      return 0;
    case GET_LIST_STORY_SUCCESS:
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

export default storyReducer;
