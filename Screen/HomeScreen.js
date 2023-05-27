import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Description from "./Description";
const HomeScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Trang chủ"
        component={Home}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
      <HomeStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
