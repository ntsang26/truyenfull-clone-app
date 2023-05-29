import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AntDesign from "react-native-vector-icons/AntDesign"
import Explore from "./views/Explore"
import Offline from "./views/Offline"
import HomeScreen from "./screen/HomeScreen"
import CategoryScreen from "./screen/CategoryScreen"
import { Provider } from "react-redux"
import store from "./redux/store"
import SearchScreen from "./screen/SearchScreen"
import { EXPLORE, GENRE, HOME, OFFLINE, SEARCH } from "./constant/view.js"
import SplashScreen from "./screen/SplashScreen.js"

function App() {
  const [loading, setLoading] = React.useState(true)
  const Tab = createBottomTabNavigator()
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Provider store={store}>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              tabBarLabelStyle: {
                fontSize: 13,
              },
              tabBarStyle: {
                backgroundColor: "black",
              },
            }}
          >
            <Tab.Screen
              name={HOME}
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarLabel: HOME,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name={EXPLORE}
              component={Explore}
              options={{
                headerShown: false,
                tabBarLabel: EXPLORE,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="find" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name={GENRE}
              component={CategoryScreen}
              options={{
                headerShown: false,
                tabBarLabel: GENRE,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="book" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name={SEARCH}
              component={SearchScreen}
              options={{
                headerShown: false,
                tabBarLabel: "Tìm kiếm",
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="search1" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name={OFFLINE}
              component={Offline}
              options={{
                headerShown: false,
                tabBarLabel: "Truyện offline",
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="arrowdown" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}

export default App
