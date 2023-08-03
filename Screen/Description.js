import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import RenderHtml from "react-native-render-html";
import { getListChap } from "../action/chapAction";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { BOTTOMTAB, READSTORY } from "../constant/view";

const tagsStyles = {
  p: {
    fontSize: 17,
  },
};
const Description = ({ route, navigation }) => {
  const { sid } = route.params;
  const contentWidth = useWindowDimensions();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  const list = useSelector((state) => state);

  const data = list.posts.posts;
  const story = list.chap.posts;
  const findStories = data.find((item) => item.sid == sid);

  const source = {
    html: findStories.desc,
  };

  useEffect(() => {
    dispatch(getListChap(sid));
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <View
            style={{
              backgroundColor: "#DDDDDD",
              paddingVertical: 30,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={{ uri: `${findStories.image}` }}
                style={{ width: 170, height: 230 }}
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
          </View>
          <View>
            <View style={display ? styles.hide : styles.seeMore}>
              <RenderHtml
                source={source}
                contentWidth={contentWidth}
                tagsStyles={tagsStyles}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setDisplay(!display);
              }}
            >
              <Text style={{ color: "#3333FF", marginTop: 10 }}>
                {display ? "Xem thêm" : "Thu gọn"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
          {story == undefined
            ? ""
            : story.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(READSTORY, {
                        swiperIndex: index,
                        name: findStories.title,
                      })
                    }
                    style={{
                      marginBottom: 10,
                      backgroundColor: "#DDDDDD",
                      paddingHorizontal: 10,
                      paddingVertical: 15,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ fontSize: 17 }}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,

          width: "100%",
          backgroundColor: "#F5F5F5",
        }}
      >
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", flexDirection: "row" }}
            onPress={() => {
              navigation.navigate(BOTTOMTAB);
            }}
          >
            <AntDesign name="doubleleft" size={25} />
          </TouchableOpacity>
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
                navigation.navigate(READSTORY, {
                  swiperIndex: 0,
                  name: findStories.title,
                });
              }}
            >
              <Text style={{ fontSize: 19 }}>Đọc Truyện </Text>
            </TouchableOpacity>
          </View>
          {/* tải truyện ofline */}
          <TouchableOpacity onPress={() => console.log("item =====", story)}>
            <AntDesign name="arrowdown" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Description;

const styles = StyleSheet.create({
  seeMore: {
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
  },
  hide: {
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 10,
    height: 215,
  },
});
