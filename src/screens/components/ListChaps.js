import React, { useEffect, useState } from "react"
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { VIEW } from "../../constant/index.js"

const ListChaps = ({ navigation, route }) => {
	const { chaps } = route.params
	const [data, setData] = useState([])

	useEffect(() => {
		if (chaps.length) {
			let newData = chaps.sort(
				(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
			)
			setData(newData)
		}
	}, [])

	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<View style={styles.container}>
				{data.map((item, idx) => (
					<TouchableOpacity
						style={styles.chap}
						key={item.sid}
						onPress={() =>
							navigation.navigate(VIEW.READ_STORY, { chaps, chapIndex: idx })
						}
					>
						<Text>{item.title}</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}

export default ListChaps

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
		gap: 20,
		marginTop: 20,
	},
	chap: {
		padding: 20,
		backgroundColor: "#f1f2f6",
		borderRadius: 10,
	},
})
