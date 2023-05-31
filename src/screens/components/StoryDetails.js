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
import {
	selectAuthor,
	selectCategory,
	selectStory,
} from "../../redux/slice/dataSlice.js"
import AntDesign from "react-native-vector-icons/AntDesign"
import moment from "moment"
import RenderHTML, { useContentWidth } from "react-native-render-html"
import { api } from "../../../services"
import { VIEW } from "../../constant/index.js"

const StoryDetails = ({ navigation, route }) => {
	let { sid } = route.params
	const listStory = useSelector(selectStory) || []
	const listAuthor = useSelector(selectAuthor) || []
	const listCategory = useSelector(selectCategory) || []
	const [story, setStory] = useState({})
	const [author, setAuthor] = useState({})
	const [category, setCategory] = useState({})
	const [chaps, setChaps] = useState([])
	const [isCollapse, setIsCollapse] = useState(false)

	const contentWidth = useContentWidth()

	useEffect(() => {
		if (listStory.length !== 0) {
			let data = listStory.find((item) => item.sid === sid) || {}
			if (data) {
				setStory(data)
			}
		}
	}, [sid])

	useEffect(() => {
		const getChaps = async () => {
			try {
				let opt = {
					queryInput: {
						storyId: sid,
					},
					sort: { createdAt: 1 },
				}
				let rs = await api.getChap(opt)
				if (rs && rs.errorCode === 0) setChaps(rs.data)
			} catch (error) {
				console.log(error)
			}
		}
		getChaps()
	}, [])

	useEffect(() => {
		if (listAuthor && listCategory) {
			setAuthor(listAuthor.find((item) => item.sid === story.authorId))
			setCategory(listCategory.find((item) => item.sid === story.categoryId))
		}
	}, [sid, listAuthor, listCategory, story])

	return (
		<View style={styles.container}>
			<ScrollView style={styles.storyDetail}>
				<View style={styles.infoBox}>
					<Image source={{ uri: story.image }} style={styles.storyImage} />
					<Text style={styles.storyTitle}>{story.title}</Text>
				</View>
				<View style={{ ...styles.infoBox, alignItems: "flex-start", gap: 10 }}>
					<Text>
						Tác giả:{" "}
						<Text style={{ fontWeight: 500, color: "#1e90ff" }}>
							{author?.name || "Đang cập nhật"}
						</Text>
					</Text>
					<Text>
						Thể loại:{" "}
						<Text style={{ fontWeight: 500, color: "#1e90ff" }}>
							{category?.name || "Đang cập nhật"}
						</Text>
					</Text>
					<Text>
						Số chương: <Text style={{ fontWeight: 500 }}>{story?.chaps}</Text>
					</Text>
					<Text>
						Ngày đăng:{" "}
						<Text style={{ fontWeight: 500 }}>
							{moment(story?.createdAt).format("hh:mm:ss DD-MM-yyyy")}
						</Text>
					</Text>
					<Text>
						Ngày cập nhật:{" "}
						<Text style={{ fontWeight: 500 }}>
							{moment(story?.updatedAt).format("hh:mm:ss DD-MM-yyyy")}
						</Text>
					</Text>
				</View>
				<View style={{ ...styles.infoBox }}>
					<Text
						style={isCollapse ? styles.storyDescUnCll : styles.storyDescCll}
					>
						<RenderHTML
							contentWidth={contentWidth}
							source={{ html: story?.desc || DEFAULT_CONTENT }}
						/>
					</Text>
					<Text
						style={{ fontWeight: 500, color: "#1e90ff" }}
						onPress={() => setIsCollapse(!isCollapse)}
					>
						{isCollapse ? "Thu gọn" : "Xem thêm"}
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 10,
					}}
				>
					<Text style={{ fontWeight: 500 }}>Các số của truyện</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate(VIEW.LIST_CHAP_BY_STORY, { chaps })
						}}
					>
						<Text style={{ fontWeight: 500, color: "#1e90ff", fontSize: 14 }}>
							Xem toàn bộ
						</Text>
					</TouchableOpacity>
				</View>
				{chaps.slice(0, 5).map((item, index) => (
					<TouchableOpacity
						key={item.sid}
						onPress={() =>
							navigation.navigate(VIEW.READ_STORY, { chaps, chapIndex: index })
						}
					>
						<View
							style={{
								...styles.infoBox,
								alignItems: "flex-start",
								marginBottom: 10,
							}}
						>
							<Text>{item.title}</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
			<View style={styles.actions}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text>
						<AntDesign name="close" size={40} color={"#1e90ff"} />
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						backgroundColor: "#1e90ff",
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 5,
					}}
					onPress={() =>
						navigation.navigate(VIEW.READ_STORY, { storyId: story.sid })
					}
				>
					<Text style={{ fontSize: 20, color: "white", fontWeight: 500 }}>
						Đọc truyện
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<AntDesign name="download" size={40} color={"#1e90ff"} />
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
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: 90,
	},
	back: {
		color: "#1e90ff",
	},
	storyDetail: {
		marginTop: 50,
		paddingHorizontal: 20,
	},
	infoBox: {
		backgroundColor: "#f1f2f6",
		paddingHorizontal: 20,
		paddingVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginBottom: 20,
	},
	storyImage: {
		width: 200,
		height: 300,
	},
	storyTitle: {
		fontSize: 20,
		fontWeight: 500,
		marginTop: 20,
		textAlign: "center",
	},
	storyDescCll: {
		height: 150,
	},
	storyDescUnCll: {
		height: "auto",
	},
})

const DEFAULT_CONTENT = `<p>Loading...</p>`
