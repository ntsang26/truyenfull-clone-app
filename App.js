import { NavigationContainer } from "@react-navigation/native"
import { VIEW } from "./src/constant"
import { createStackNavigator } from "@react-navigation/stack"
import StoryDetails from "./src/screens/components/StoryDetails.js"
import ListStory from "./src/screens/components/Genre/ListStory.js"

import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import { HomeScreen } from "./src/screens"
const Stack = createStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#FFF",
						},
						headerTintColor: "#1e90ff",
						headerTitleAlign: "left",
					}}
				>
					<Stack.Screen name={VIEW.HOME} component={HomeScreen} />
					<Stack.Screen
						name={VIEW.STORY_DETAIL}
						component={StoryDetails}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name={VIEW.LIST_STORY_BY_GENRE}
						component={ListStory}
						options={{
							title: false,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
