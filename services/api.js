import request from "./request.js"

const paths = {
	getStory: "/api/v1/stories",
	getAuthor: "/api/v1/author",
	getCategory: "/api/v1/category",
	getChap: "/api/v1/chap",
}
let api = {}

const flattenObject = (obj) => {
	let flattened = {}
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === "object" && obj[key] !== null) {
			Object.assign(flattened, flattenObject(obj[key]))
		} else {
			flattened[key] = obj[key]
		}
	})
	return flattened
}

const flattenedPaths = flattenObject(paths)

for (let key in flattenedPaths) {
	api[key] = async function (data, options = {}) {
		let { headers, method, isPublic } = options
		return await request.request(
			flattenedPaths[key],
			data,
			headers,
			method,
			isPublic,
		)
	}
}

export default api
