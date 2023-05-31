import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	story: [],
	category: [],
	author: [],
	dataOffline: [],
}

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setStory: (state, action) => {
			state.story = action.payload
		},
		setCategory: (state, action) => {
			state.category = action.payload
		},
		setAuthor: (state, action) => {
			state.author = action.payload
		},
		setDataOffline: (state, action) => {
			state.dataOffline = action.payload
		},
	},
})

export const selectStory = (state) => state.data.story
export const selectCategory = (state) => state.data.category
export const selectAuthor = (state) => state.data.author
export const selectDataOffline = (state) => state.data.dataOffline

export const { setCategory, setStory, setAuthor, setDataOffline } =
	dataSlice.actions

export default dataSlice.reducer
