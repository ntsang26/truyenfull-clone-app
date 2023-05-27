import axios from "axios";
import { API, END_POINT } from "../services/api";
const callStory = async () => {
  const token = API.SECRET_TOKEN;
  const res = await axios({
    method: "post",
    // url: `${baseUrl}/stories`,
    // url: API.BASE_URL / END_POINT.getStory,
    url: `${API.BASE_URL}/stories`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("call story data ======", res.data);
  return res.data;
};
export default callStory;
