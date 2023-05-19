import { API } from './api.js';

let request = {}

request.callAPI = async (method = "POST", data = {}, endpoint = "") => {
  try {
    let option = {
      method: method,
      body: data,
      headers: {
        Authorization: `Bearer ${API.SECRET_TOKEN}`,
      },
    }
    let response = await fetch(`${API.BASE_URL}/${endpoint}`, option)
    let res = await response.json()
    if(res.errorCode === 0) {
      return res
    }
  } catch (error) {
    console.log("callAPI: ", error)
  }
}

export default request