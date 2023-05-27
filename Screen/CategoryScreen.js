import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../views/Home";
// import Description from "./Description";
import Genre from "../views/Genre";
const CategoryScreen = () => {
  const CategoryStack = createNativeStackNavigator();
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Thể loại"
        component={Genre}
        options={{
          headerShown: false,
        }}
      />
      {/* <HomeStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: false
        }}
      /> */}
    </CategoryStack.Navigator>
  );
};
export default CategoryScreen;
