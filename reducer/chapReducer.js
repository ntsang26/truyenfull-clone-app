import {
  GET_LIST_CHAP,
  GET_LIST_CHAP_SUCCESS,
} from "../constant/chapConstant.js";
const chapReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_CHAP:
      return 0;
    case GET_LIST_CHAP_SUCCESS:
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

export default chapReducer;
