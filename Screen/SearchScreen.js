import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindStories from "../views/FindStories";
import Description from "./Description";

const SearchScreen = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Tìm kiếm "
        component={FindStories}
        options={{
          headerShown: true,
        }}
      />
      <SearchStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: true,
        }}
      />
    </SearchStack.Navigator>
  );
};
export default SearchScreen;
