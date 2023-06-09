import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import React, { useState } from "react"
import { TextInput } from "react-native-gesture-handler"
import { VIEW } from "../constant/index.js"
import moment from "moment"
import { useSelector } from "react-redux"
import { selectStory } from "../redux/slice/dataSlice.js"
import unidecode from "unidecode"

const SearchScreen = ({ navigation }) => {
	const [search, onChangeSearch] = useState("")
	const [data, setData] = useState([])
	const listStory = useSelector(selectStory)

	const handleSearch = () => {
		if (!search) {
			setData([])
			return
		}
		const foundStories = listStory.filter((item) =>
			convertStr(item.title).includes(convertStr(search)),
		)
		setData(foundStories)
		onChangeSearch("")
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					value={search}
					onChangeText={onChangeSearch}
					placeholder="Nhập tên truyện..."
				/>
				<TouchableOpacity onPress={handleSearch}>
					<Text>Tìm kiếm</Text>
				</TouchableOpacity>
			</View>
			<ScrollView>
				<View style={{ ...styles.container, paddingHorizontal: 20 }}>
					{data.map((item) => (
						<TouchableOpacity
							key={item.sid}
							onPress={() => {
								navigation.navigate(VIEW.STORY_DETAIL, { sid: item.sid })
							}}
							style={styles.storyTouch}
						>
							<View style={styles.storyItem}>
								<Image source={{ uri: item.image }} style={styles.storyImage} />
								<View style={styles.storyInfo}>
									<Text style={styles.storyTitle}>{item.title}</Text>
									<Text style={{ fontSize: 16 }}>Số chương: {item.chaps}</Text>
									<Text style={{ fontSize: 16 }}>
										Ngày phát hành:{" "}
										{moment(item.createdAt).format("DD/MM/YYYY")}
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default SearchScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginEnd: 20,
	},
	input: {
		height: 40,
		margin: 12,
		padding: 10,
		borderBottomWidth: 1,
		flex: 1,
	},
	storyTouch: {
		marginVertical: 10,
		backgroundColor: "#f1f2f6",
		borderRadius: 10,
		paddingEnd: 20
	},
	storyItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 15,
	},
	storyImage: {
		width: 120,
		height: 200,
		borderRadius: 10,
	},
	storyInfo: {
		flexWrap: "wrap",
		gap: 10,
	},
	storyTitle: {
		fontSize: 18,
		width: 200,
	},
})

const convertStr = (str = "") => {
	let result = str
	result = result.toLowerCase()
	result = unidecode(result)
	return result
}
