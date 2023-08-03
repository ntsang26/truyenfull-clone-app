import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import { DESC } from "../constant/view.js";

const CategoryDetails = ({ route, navigation }) => {
  const { sid, name } = route.params;

  const list = useSelector((state) => state);
  const data = list.posts.posts;

  const filterStories = data.filter((item) => sid === item.categoryId);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 20,
          marginTop: 50,
        }}
      >
        {filterStories == undefined
          ? ""
          : filterStories.map((item) => {
              return (
                <TouchableOpacity
                  key={item.sid}
                  style={{
                    marginVertical: 20,
                    backgroundColor: "#EEEEEE",
                    borderRadius: 10,
                  }}
                  onPress={() =>
                    navigation.navigate(DESC, {
                      sid: item.sid,
                    })
                  }
                >
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Image
                        source={{ uri: `${item.image}` }}
                        style={{ width: 120, height: 200, borderRadius: 10 }}
                      />
                    </View>

                    <View style={{ marginLeft: 10, flexWrap: "wrap" }}>
                      <Text
                        style={{
                          width: 245,
                          fontSize: 18,
                          paddingRight: 8,
                          paddingTop: 10,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          paddingTop: 13,
                          paddingBottom: 13,
                        }}
                      >
                        Số chap: {item.chaps}
                      </Text>
                      <Text style={{ fontSize: 16 }}>
                        Ngày phát hành :{" "}
                        {moment(item.createdAt).format("DD/MM/YYYY")}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
};
export default CategoryDetails;
