import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import RenderHtml from "react-native-render-html";
import { getListChap } from "../action/chapAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import { READ_STORY } from '../constant/view.js';

const Description = ({ route, navigation }) => {
  const { sid } = route.params;
  const list = useSelector((state) => state);

  const data = list.posts.posts;
  const findStories = data.find((item) => item.sid == sid);
  const source = {
    html: findStories.desc,
  };

  let chap = [];
  const totalChap = findStories.chap;
  for (let i = 1;i <= totalChap;i++) {
    chap.push(i);
  }

  const contentWidth = useWindowDimensions();
  const dispatch = useDispatch();

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
            <TouchableOpacity
              onPress={() => {
                dispatch(getListChap(sid));
                navigation.navigate(READ_STORY, {
                  sid: sid,
                });
              }}
            >
              <Text style={{ fontSize: 19 }}>Đọc Truyện </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <RenderHtml source={source} contentWidth={contentWidth} />
        </View>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={{ fontSize: 17, marginBottom: 20, paddingHorizontal: 20 }}>
          Danh sách các chương
        </Text>
        {chap.map((item) => (
          <Text
            key={item.sid}
            style={{
              fontSize: 17,
              paddingHorizontal: 20,
              paddingBottom: 15,
              borderColor: "black",
              borderWidth: 1,
            }}
          >
            {" "}
            chương {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
export default Description;
