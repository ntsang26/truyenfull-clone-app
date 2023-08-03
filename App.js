import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import Explore from "./views/Explore";
import Offline from "./views/Offline";
import HomeScreen from "./screen/HomeScreen";
import CategoryScreen from "./screen/CategoryScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchScreen from "./screen/SearchScreen";
import {
  EXPLORE,
  GENRE,
  HOME,
  OFFLINE,
  SEARCH,
  BOTTOMTAB,
  GENRE_DETAIL,
  DESC,
  READSTORY,
} from "./constant/view.js";
import SplashScreen from "./screen/SplashScreen.js";
import BottomTab from "./screen/BottomTab";
import CategoryDetails from "./screen/CategoryDetails";

import Description from "./screen/Description";
import Chap from "./views/Chap";

function App() {
  const [loading, setLoading] = React.useState(true);

  const Stack = createNativeStackNavigator();
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Provider store={store}>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={BOTTOMTAB}
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={GENRE_DETAIL}
              component={CategoryDetails}
              options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
              name={DESC}
              component={Description}
              options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
              name={READSTORY}
              component={Chap}
              options={({ route }) => ({ title: route.params.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
}

export default App;
