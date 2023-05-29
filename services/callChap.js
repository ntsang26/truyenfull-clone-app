import axios from "axios";
import { API, END_POINT } from "./api";
const callChap = async (sid) => {
  const data = {
    queryInput: {
      storyId: sid,
    },
    // sort: {
    //   createdAt: 1,
    // },
  };
  const token = API.SECRET_TOKEN;
  console.log("sid =======", sid);
  const res = await axios({
    method: "post",
    url: `${API.BASE_URL}/${END_POINT.getChap}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  });
  //   console.log("call data axios =======", res.data);
  return res.data;
};
export default callChap;
