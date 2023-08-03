import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListCategory } from "../action/categoryAction";
import { GENRE_DETAIL } from "../constant/view.js";

function Genre({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListCategory());
  }, []);
  const list = useSelector((state) => state);
  const data = list.category.posts;
  // console.log("data=====", data);
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        {data == undefined
          ? ""
          : data.map((item) => {
              // console.log("item.name =====", item.name);
              return (
                <TouchableOpacity
                  key={item.sid}
                  style={{
                    width: 170,
                    height: 60,
                    backgroundColor: "#CCCCCC",
                    marginVertical: 8,
                    marginHorizontal: 8,
                    borderRadius: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() =>
                    navigation.navigate(GENRE_DETAIL, {
                      sid: item.sid,
                      name: item.name,
                    })
                  }
                >
                  <Text style={{ fontSize: 19 }}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
}
export default Genre;
