import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { VIEW } from "../../constant/index.js"
import { useSelector } from "react-redux"
import {
	selectAuthor,
	selectCategory,
	selectStory,
} from "../../redux/slice/dataSlice.js"
import Ionicons from "react-native-vector-icons/Ionicons"

const StoryDetails = ({ navigation, route }) => {
	let { sid } = route.params
	const listStory = useSelector(selectStory)
	const listAuthor = useSelector(selectAuthor)
	const listCategory = useSelector(selectCategory)
	const [story, setStory] = useState({})

	useEffect(() => {
		if (listStory.length !== 0) {
			let data = listStory.find((item) => item.sid === sid) || {}
			if (data) {
				let newData = { ...data }
				let author = listAuthor.find((item) => item.sid === story.authorId)
				let category = listCategory.find(
					(item) => item.sid === story.categoryId,
				)
				newData.author = author ? author.name : "Đang cập nhật"
				newData.category = category ? category.name : "Đang cập nhật"
				setStory(newData)
			}
		}
	}, [listAuthor, listCategory])

	return (
		<View style={styles.container}>
			<ScrollView style={styles.storyDetail}>
				<View style={styles.infoBox}>
					<Image source={{ uri: story.image }} style={styles.storyImage} />
					<Text style={styles.storyTitle}>{story.title}</Text>
				</View>
				<View style={{ ...styles.infoBox, alignItems: "flex-start" }}>
					<Text>
						Tác giả:{" "}
						<Text style={{ fontWeight: 500, color: "#1e90ff" }}>
							{story.author}
						</Text>
					</Text>
					<Text>
						Thể loại:{" "}
						<Text style={{ fontWeight: 500, color: "#1e90ff" }}>
							{story.category}
						</Text>
					</Text>
				</View>
			</ScrollView>
			<View style={styles.actions}>
				<TouchableOpacity
					style={styles.back}
					onPress={() => navigation.navigate(VIEW.HOME)}
				>
					<Text>
						<Ionicons name="ios-close-outline" size={30} color={"#fff"} />
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default StoryDetails

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
	},
	actions: {
		justifyContent: "center",
		alignItems: "center",
	},
	back: {
		bottom: 50,
		backgroundColor: "#1e90ff",
		padding: 10,
		borderRadius: 100,
		flexDirection: "row",
	},
	storyDetail: {
		marginTop: 50,
	},
	infoBox: {
		backgroundColor: "#eee",
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginTop: 20,
	},
	storyImage: {
		width: 200,
		height: 300,
	},
	storyTitle: {
		fontSize: 20,
		fontWeight: 500,
		marginTop: 20,
	},
})
