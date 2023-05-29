import React, { useEffect } from "react";
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
import { DESC } from "../constant/view.js";

function Chap({ route, navigation }) {
  const { sid } = route.params;
  const dispatch = useDispatch();

  const list = useSelector((state) => state);
  const data = list.chap.posts;
  //   console.log("data =====", data);

  return (
    <ScrollView>
      <Swiper loop={false} showsPagination={false}>
        {data == undefined
          ? ""
          : data.map((item) => {
              return (
                <View>
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                  <View>
                    <RenderHtml
                      source={{ html: item.content }}
                      // contentWidth={contentWidth}
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
