import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import { selectCategory } from "../redux/slice/dataSlice.js"
import { VIEW } from "../constant/index.js"

const GenreScreen = ({ navigation }) => {
	const listCategory = useSelector(selectCategory)
	return (
		<ScrollView>
			<View style={styles.container}>
				{listCategory.map((item) => (
					<TouchableOpacity
						key={item.sid}
						onPress={() =>
							navigation.navigate(VIEW.LIST_STORY_BY_GENRE, {
								sid: item.sid,
								name: item.name,
							})
						}
					>
						<View style={styles.category}>
							<Text style={{ fontSize: 16 }}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}

export default GenreScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
		marginTop: 50,
	},
	category: {
		width: 150,
		backgroundColor: "#fff",
		paddingVertical: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
})
