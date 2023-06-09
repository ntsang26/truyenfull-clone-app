import React, { useEffect, useState } from "react"
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { useIsFocused } from "@react-navigation/native"
import { VIEW } from "../constant/index.js"
import moment from "moment"
import { useSelector } from "react-redux"
import { selectDataOffline } from "../redux/slice/dataSlice.js"

const OfflineScreen = ({ navigation }) => {
	const dataOffline = useSelector(selectDataOffline)
	const [data, setData] = useState([])
	const isFocused = useIsFocused()

	useEffect(() => {
		if (dataOffline.length) {
			let sortedData = [...dataOffline]
			sortedData.sort((a, b) => moment(b.updatedAt) - moment(a.updatedAt))
			setData(sortedData)
		}
	}, [isFocused])
	return (
		<ScrollView scrollsToTop={true}>
			<View style={styles.container}>
				{data.map((item) => {
					return (
						<TouchableOpacity
							key={item.sid}
							onPress={() => {
								navigation.navigate(VIEW.STORY_DETAIL, {
									sid: item.sid,
									offlineChaps: item.storyChaps || [],
									offlineStory: item || {},
								})
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
					)
				})}
			</View>
		</ScrollView>
	)
}

export default OfflineScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	storyTouch: {
		marginVertical: 10,
		backgroundColor: "#f1f2f6",
		borderRadius: 10,
		paddingHorizontal: 10,
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
