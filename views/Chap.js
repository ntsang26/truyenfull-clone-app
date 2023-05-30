import React from "react";
import {
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "react-native-swiper";
import RenderHtml from "react-native-render-html";

function Chap({ route, navigation }) {
  const contentWidth = useWindowDimensions()
  const { sid } = route.params;
  const dispatch = useDispatch();

  const list = useSelector((state) => state);
  const data = list.chap.posts;

  return (
    <ScrollView>
      <Swiper loop={false} showsPagination={false}>
        {data == undefined
          ? ""
          : data.map((item) => {
            return (
              <View key={item.sid}>
                <View style={{ paddingHorizontal: 20 }}>
                  <RenderHtml
                    source={{ html: item.content }}
                    contentWidth={contentWidth}
                  />
                </View>
              </View>
            );
          })}
      </Swiper>
    </ScrollView>
  );
}

export default Chap;
