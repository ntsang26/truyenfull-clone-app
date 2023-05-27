import axios from "axios";

export const getPostData = async () => {
  const baseUrl = "https://truyenfull-clone.onrender.com/api/v1";
  const token = "iUdwMYlT9iq34SFkzN3KOpRtNmPj4cG";
  // Passing configuration object to axios
  const res = await axios({
    method: "post",
    url: `${baseUrl}/stories`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
