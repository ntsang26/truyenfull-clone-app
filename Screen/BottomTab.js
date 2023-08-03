import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";

import Home from "../views/Home";
import Genre from "../views/Genre";
import CategoryScreen from "./CategoryScreen";
import SearchScreen from "./SearchScreen";
import Offline from "../views/Offline";
import { HOME, GENRE, SEARCH, OFFLINE, GENRE_DETAIL } from "../constant/view";
import CategoryDetails from "./CategoryDetails";
import FindStories from "../views/FindStories";
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: HOME,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={GENRE}
        component={Genre}
        options={{
          tabBarLabel: GENRE,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={FindStories}
        options={{
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
  );
};
export default BottomTab;
