import React, { useEffect, useState } from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import GenreScreen from "./GenreScreen.js"
import SplashScreen from "./SplashScreen.js"
import SearchScreen from "./SearchScreen.js"
import OfflineScreen from "./OfflineScreen.js"
import { VIEW } from "../constant/index.js"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ListStory from "./components/Home/ListStory.js"
import { useDispatch, useSelector } from "react-redux"
import {
	selectAuthor,
	selectCategory,
	selectStory,
	setAuthor,
	setCategory,
	setStory,
} from "../redux/slice/dataSlice.js"
import api from "../../services/api.js"

const Tab = createBottomTabNavigator()

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch()
	const listStory = useSelector(selectStory)
	const listCategory = useSelector(selectCategory)
	const listAuthor = useSelector(selectAuthor)

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		if (listStory.length !== 0) {
			setIsLoading(false)
		} else {
			const rs = await api.getStory()
			if (rs.errorCode !== 0) return
			dispatch(setStory(rs.data))
			setIsLoading(false)
		}

		if (listCategory.length !== 0) {
			setIsLoading(false)
		} else {
			const rs = await api.getCategory()
			if (rs.errorCode !== 0) return
			dispatch(setCategory(rs.data))
			setIsLoading(false)
		}

		if (listAuthor.length !== 0) {
			setIsLoading(false)
		} else {
			const rs = await api.getAuthor()
			if (rs.errorCode !== 0) return
			dispatch(setAuthor(rs.data))
			setIsLoading(false)
		}
	}

	return (
		<>
			{isLoading ? (
				<SplashScreen />
			) : (
				<Tab.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#FFF",
						},
						headerTintColor: "#1e90ff",
						headerTitleAlign: "left",
					}}
				>
					<Tab.Screen
						name={VIEW.LIST_STORY}
						component={ListStory}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="ios-home-outline" size={size} color={color} />
							),
						}}
					/>
					<Tab.Screen
						name={VIEW.GENRE}
						component={GenreScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="ios-library-outline"
									size={size}
									color={color}
								/>
							),
						}}
					/>
					<Tab.Screen
						name={VIEW.SEARCH}
						component={SearchScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="ios-search-outline" size={size} color={color} />
							),
						}}
					/>
					<Tab.Screen
						name={VIEW.OFFLINE}
						component={OfflineScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons
									name="ios-cloud-download-outline"
									size={size}
									color={color}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			)}
		</>
	)
}

export default HomeScreen
