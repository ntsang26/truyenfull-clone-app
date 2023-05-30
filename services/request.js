import config from "./config.js"

let request = {}
request.request = async (url, data, headers, method = "POST") => {
	try {
		url = `${config.host}${url}`
		let option = {
			method, // or 'PUT'
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${config.secretToken}`,
			},
		}
		option.headers = Object.assign({}, option.headers, headers)
		if (method === "GET") delete option.body

		let res = await fetch(url, option)
		if (!res.ok) return { errorCode: 1, errorMsg: "Server Error" }
		let rs = await res.json()
		return rs
	} catch (err) {
		console.log("res", err)
		throw err
	}
}
export default request
