import moment from "moment"
import React, { useEffect, useState } from "react"
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { api } from "../../../../services"
import { VIEW } from "../../../constant/index.js"
import { selectStory, setStory } from "../../../redux/slice/dataSlice.js"

const ListStory = ({ navigation }) => {
	const dispatch = useDispatch()
	const [data, setData] = useState([])
	const listStory = useSelector(selectStory)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		if (listStory.length !== 0) setData(listStory)
		else {
			const rs = await api.getStory()
			if (rs.errorCode !== 0) return
			dispatch(setStory(rs.data))
			setData(rs.data)
		}
	}

	return (
		<ScrollView>
			<View style={styles.container}>
				{data.map((item) => {
					return (
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
					)
				})}
			</View>
		</ScrollView>
	)
}

export default ListStory

const styles = StyleSheet.create({
	container: { paddingHorizontal: 20, backgroundColor: "#FFF" },
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
