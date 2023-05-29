import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chap from "../views/Chap";
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
        }}
      />
      <HomeStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Đọc truyện"
        component={Chap}
        options={{
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
