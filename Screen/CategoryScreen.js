import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DESC, GENRE, GENRE_DETAIL } from '../constant/view.js';
// import Home from "../views/Home";
// import Description from "./Description";
import Genre from "../views/Genre";
import CategoryDetails from "./CategoryDetails";
import Description from "./Description";
const CategoryScreen = () => {
  const CategoryStack = createNativeStackNavigator();
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name={GENRE}
        component={Genre}
        options={{
          headerShown: true,
        }}
      />
      <CategoryStack.Screen
        name={GENRE_DETAIL}
        component={CategoryDetails}
        options={{
          headerShown: true,
        }}
      />
      <CategoryStack.Screen
        name={DESC}
        component={Description}
        options={{
          headerShown: true,
        }}
      />
    </CategoryStack.Navigator>
  );
};
export default CategoryScreen;
