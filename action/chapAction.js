import { GET_LIST_CHAP, GET_LIST_CHAP_SUCCESS } from "../constant/chapConstant";
export const getListChap = (action) => {
  // console.log("action ========", action);
  return {
    type: GET_LIST_CHAP,
    payload: action,
  };
};

export const getListChapSuccess = (payload) => {
  // console.log("payload  trong getlistchapsuccess =====", payload);
  return {
    type: GET_LIST_CHAP_SUCCESS,
    payload,
  };
};
