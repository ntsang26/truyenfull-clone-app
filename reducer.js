const postReducer = (state = [], action) => {
  // console.log("action.type trong reducer =====" + "\n", action);
  switch (action.type) {
    case "GET_LIST_POST":
      return 0;
    case "GET_LIST_POST_SUCCESS":
      const { data } = action.payload;
      return {
        ...state,
        posts: data,
        load: false,
      };
      return 1;
    default:
      return state;
  }
};

export default postReducer;
