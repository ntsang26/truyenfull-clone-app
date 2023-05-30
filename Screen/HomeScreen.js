import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chap from "../views/Chap";
import { DESC, HOME, READ_STORY } from '../constant/view.js';
import Home from "../views/Home";
import Description from "./Description";
const HomeScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HOME}
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name={DESC}
        component={Description}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name={READ_STORY}
        component={Chap}
        options={{
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
