import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DESC, SEARCH } from '../constant/view.js';
import FindStories from "../views/FindStories";
import Description from "./Description";

const SearchScreen = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={SEARCH}
        component={FindStories}
        options={{
          headerShown: true,
        }}
      />
      <SearchStack.Screen
        name={DESC}
        component={Description}
        options={{
          headerShown: true,
        }}
      />
    </SearchStack.Navigator>
  );
};
export default SearchScreen;
