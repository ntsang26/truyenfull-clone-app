import axios from "axios";
import { API, END_POINT } from "./api";
const callStory = async () => {
  const token = API.SECRET_TOKEN;
  const res = await axios({
    method: "post",
    url: `${API.BASE_URL}/${END_POINT.getStory}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export default callStory;
