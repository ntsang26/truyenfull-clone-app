import React, { useEffect, useState } from "react"
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { useSelector } from "react-redux"
import { selectStory } from "../../../redux/slice/dataSlice.js"
import { VIEW } from "../../../constant/index.js"
import moment from "moment"

const ListStory = ({ navigation, route }) => {
	const { sid, name } = route.params
	let listStory = useSelector(selectStory)
	const data = listStory.filter((item) => item.categoryId === sid) || []

	useEffect(() => {
		navigation.setOptions({
			headerBackTitle: name,
		})
	}, [])

	return (
		<ScrollView>
			{data.length ? (
				<View style={styles.container}>
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
			) : (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "white",
					}}
				>
					<Text>Đang cập nhật...</Text>
				</View>
			)}
		</ScrollView>
	)
}

export default ListStory

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		backgroundColor: "#FFF",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	storyTouch: {
		marginVertical: 20,
		backgroundColor: "#f1f2f6",
		borderRadius: 10,
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
		width: 210,
	},
})
