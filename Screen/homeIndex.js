import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "../Home";
import Explore from "../views/Explore";
import Genre from "../views/Genre";
import FindStories from "../views/FindStories";
import Offline from "../views/Offline";
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function homeIndex({ navigation }) {
  return (
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
        name="Trang chủ "
        component={Home}
        options={{
          //   headerShown: false,
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
        component={Genre}
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
  );
}

export default homeIndex;
