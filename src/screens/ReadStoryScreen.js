import React, { useEffect, useState } from "react"
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import RenderHTML, { useContentWidth } from "react-native-render-html"
import Swiper from "react-native-swiper"
import api from "../../services/api.js"

const ReadStoryScreen = ({ navigation, route }) => {
	const { storyId, chaps, chapIndex } = route.params
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const contentWidth = useContentWidth()

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		if (!storyId && chaps) {
			let newData = [...chaps]
			newData = newData.sort(
				(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
			)
			setData(newData)
			setIsLoading(false)
		}
		if (storyId) {
			let opts = {
				queryInput: {
					storyId,
				},
				sort: {
					createdAt: 1,
				},
			}
			let rs = await api.getChap(opts)
			if (rs && rs.errorCode === 0) {
				setData(rs.data)
				setIsLoading(false)
			}
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<View style={{ flex: 1 }}>
					<Swiper
						loop={false}
						scrollsToTop={true}
						showsPagination={false}
						index={chapIndex || 0}
					>
						{data.map((item) => (
							<ScrollView key={item.sid} style={styles.storyContent}>
								<View>
									<Text style={styles.chapTitle}>{item.title}</Text>
									<RenderHTML
										contentWidth={contentWidth}
										source={{ html: item.content || DEFAULT_CONTENT }}
										tagsStyles={tagStyles}
									/>
								</View>
							</ScrollView>
						))}
					</Swiper>
					<View style={styles.actions}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<AntDesign name="arrowleft" color="#1e90ff" size={30} />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</SafeAreaView>
	)
}

export default ReadStoryScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: StatusBar.currentHeight,
	},
	chapTitle: {
		fontSize: 30,
		textAlign: "center",
		color: "green",
		fontWeight: 500,
		marginBottom: 30,
	},
	storyContent: {
		paddingHorizontal: 20,
	},
	actions: {
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: "#f1f2f6",
	},
})

const tagStyles = {
	p: {
		fontSize: 20,
	},
}

const DEFAULT_CONTENT = `<p>Loading...</p>`
