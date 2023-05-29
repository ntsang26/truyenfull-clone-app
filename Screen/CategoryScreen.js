import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../views/Home";
// import Description from "./Description";
import Genre from "../views/Genre";
import categoryDetails from "./categoryDetails";
import Description from "./Description";
const CategoryScreen = () => {
  const CategoryStack = createNativeStackNavigator();
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Thể loại"
        component={Genre}
        options={{
          headerShown: true,
        }}
      />
      <CategoryStack.Screen
        name="Chi tiết thể loại"
        component={categoryDetails}
        options={{
          headerShown: true,
        }}
      />
      <CategoryStack.Screen
        name="Mô tả"
        component={Description}
        options={{
          headerShown: true,
        }}
      />
    </CategoryStack.Navigator>
  );
};
export default CategoryScreen;
