import { View, Text, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import RenderHtml from "react-native-render-html";
const Describe = ({ route, navigation }) => {
  const { id } = route.params;
  // console.log("id cua truyen la =========", id);
  const list = useSelector((state) => state);

  const data = list.posts.posts;
  // console.log("data ======", data);
  const findStories = data.find((item) => item._id == id);
  // console.log("ket qua loc ========", findStories);
  const source = {
    html: findStories.desc,
  };
  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={{ uri: `${findStories.image}` }}
            style={{ width: 140, height: 200 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontSize: 17 }}>{findStories.title}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // paddingBottom: 15,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: 240,
              height: 50,
              backgroundColor: "#99CC66",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 19 }}>Đọc Truyện </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <RenderHtml source={source} />
        </View>
      </View>
    </ScrollView>
  );
};
export default Describe;
