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
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
