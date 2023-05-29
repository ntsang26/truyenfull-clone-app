import axios from "axios";
import { API, END_POINT } from "./api";
const callChap = async (sid) => {
  const token = API.SECRET_TOKEN;
  console.log("sid =======", sid);
  const res = await axios({
    method: "post",
    url: `${API.BASE_URL}/${END_POINT.getChap}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export default callChap;
