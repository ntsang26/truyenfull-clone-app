import axios from "axios";
import { API, END_POINT } from "./api";
const callCategory = async () => {
  const token = API.SECRET_TOKEN;
  const res = await axios({
    method: "post",
    url: `${API.BASE_URL}/${END_POINT.getCategory}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
export default callCategory;
