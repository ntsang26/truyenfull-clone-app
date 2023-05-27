import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Explore from "./views/Explore";
import FindStories from "./views/FindStories";
import Genre from "./views/Genre";
import Offline from "./views/Offline";
import HomeScreen from "./screen/HomeScreen";
import CategoryScreen from "./screen/CategoryScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
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
            name="Trang chủ"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: "Trang chủ",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Khám phá"
            component={Explore}
            options={{
              tabBarLabel: "Khám phá",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="find" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Thể loại"
            component={CategoryScreen}
            options={{
              tabBarLabel: "Thể loại",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="book" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Tìm kiếm truyện"
            component={FindStories}
            options={{
              tabBarLabel: "Tìm kiếm",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Truyện offline"
            component={Offline}
            options={{
              tabBarLabel: "Truyện offline",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="arrowdown" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
