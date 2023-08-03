import React, { useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Swiper from "react-native-swiper";
import RenderHtml from "react-native-render-html";
import { getListStory } from "../action/action";
import { BOTTOMTAB, DESC } from "../constant/view.js";

const tagsStyles = {
  p: {
    fontSize: 17,
  },
};

function Chap({ route, navigation }) {
  const { swiperIndex } = route.params;
  const dispatch = useDispatch();

  const list = useSelector((state) => state);
  const data = list.chap.posts;
  //   console.log("data =====", data);

  return (
    // <View style={{ flex: 1, paddingBottom: 50 }}>
    <View>
      <ScrollView>
        <Swiper
          loop={false}
          showsPagination={false}
          index={swiperIndex}
          // style={{ flex: 1, paddingBottom: 10 }}
        >
          {data == undefined
            ? ""
            : data.map((item) => {
                return (
                  <ScrollView style={{}}>
                    <View
                      style={{
                        paddingHorizontal: 20,
                        paddingTop: 30,
                        paddingBottom: 170,
                      }}
                    >
                      <View>
                        <Text style={{ fontSize: 18, color: "#0000EE" }}>
                          {item.title}
                        </Text>
                      </View>
                      <View>
                        <RenderHtml
                          source={{ html: item.content }}
                          tagsStyles={tagsStyles}
                          // contentWidth={contentWidth}
                        />
                      </View>
                    </View>
                  </ScrollView>
                );
              })}
        </Swiper>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "#F5F5F5",
          // height: 60,
          bottom: 0,
          paddingVertical: 25,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(BOTTOMTAB);
          }}
        >
          <AntDesign name="doubleleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="arrowdown" size={25} />
        </TouchableOpacity>
      </View>
    </View>

    // </View>
  );
}

export default Chap;
