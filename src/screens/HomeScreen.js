import React, { useEffect, useState } from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import GenreScreen from "./GenreScreen.js"
import SplashScreen from "./SplashScreen.js"
import SearchScreen from "./SearchScreen.js"
import OfflineScreen from "./OfflineScreen.js"
import { VIEW } from "../constant/index.js"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ListStory from "./components/Home/ListStory.js"
import { useDispatch } from "react-redux"
import {
	setAuthor,
	setCategory,
	setDataOffline,
	setStory,
} from "../redux/slice/dataSlice.js"
import api from "../../services/api.js"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Tab = createBottomTabNavigator()

const HomeScreen = ({ navigation }) => {
	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	useEffect(() => {
		setTimeout(async () => await fetchData(), 1000)
	}, [])

	const fetchData = async () => {
		try {
			await Promise.all([
				fetchStory(),
				fetchCategory(),
				fetchAuthor(),
				fetchDataOffline(),
			])
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	const fetchStory = async () => {
		const rs = await api.getStory()
		if (rs.errorCode !== 0) return
		dispatch(setStory(rs.data))
	}

	const fetchCategory = async () => {
		const rs = await api.getCategory()
		if (rs.errorCode !== 0) return
		dispatch(setCategory(rs.data))
	}

	const fetchAuthor = async () => {
		const rs = await api.getAuthor()
		if (rs.errorCode !== 0) return
		dispatch(setAuthor(rs.data))
	}

	const fetchDataOffline = async () => {
		const allKey = (await getAllKeys()) || []
		const storageValues = (await getStorageValues(allKey)) || []
		dispatch(setDataOffline(storageValues))
	}

	const getAllKeys = async () => {
		let keys = []
		try {
			keys = await AsyncStorage.getAllKeys()
		} catch (e) {
			console.log(e)
			throw e
		}
		return keys
	}

	const getStorageValues = async (allKey) => {
		try {
			let result = []
			for (const key of allKey) {
				const jsonValue = await AsyncStorage.getItem(key)
				if (jsonValue !== null) {
					result.push(JSON.parse(jsonValue))
				}
			}
			return result
		} catch (e) {
			console.log(e)
			throw e
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
