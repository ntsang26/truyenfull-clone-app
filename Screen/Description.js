import { View, Text, Image, ScrollView, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";
import RenderHtml from "react-native-render-html";

const Description = ({ route, navigation }) => {
  const { sid } = route.params;
  const list = useSelector((state) => state);

  const data = list.posts.posts;
  const findStories = data.find((item) => item.sid == sid);
  const source = {
    html: findStories.desc,
  };
  const contentWidth = useWindowDimensions()
  return (
    <ScrollView>
      <View style={{ marginTop: 100 }}>
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
          <RenderHtml
            source={source}
            contentWidth={contentWidth}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Description;
